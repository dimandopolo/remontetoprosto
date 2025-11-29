from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
from sqlalchemy import create_engine, Column, Integer, String, Float, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import databases
import sqlalchemy

import os

# Абсолютный путь к БД ВНЕ папки проекта
DB_PATH = "/var/lib/repair-database/repair_services.db"

# Создаем папку если не существует
os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)

DATABASE_URL = f"sqlite:///{DB_PATH}"

print(f"Database path: {DB_PATH}")  # Для дебага

database = databases.Database(DATABASE_URL)
metadata = sqlalchemy.MetaData()

# Определяем таблицу
services = sqlalchemy.Table(
    "services",
    metadata,
    Column("id", Integer, primary_key=True, index=True),
    Column("brand", String, nullable=False),
    Column("model", String, nullable=False),
    Column("service", String, nullable=False),
    Column("price", Float, nullable=False),
    Column("cost", Float, nullable=False),
    Column("duration", String, nullable=False),
    Column("comment", Text),
    Column("device", String)
)

# Создаем движок и таблицы
engine = sqlalchemy.create_engine(
    DATABASE_URL, connect_args={"check_same_thread": False}
)
metadata.create_all(bind=engine)

app = FastAPI(title="Phone Repair API")

# Разрешаем запросы из React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Модель данных для услуги
class Service(BaseModel):
    id: Optional[int] = None
    brand: str
    model: str
    service: str
    price: float
    cost: float
    duration: str
    comment: Optional[str] = None
    device: Optional[str] = None

# Подключаемся к базе при запуске
@app.on_event("startup")
async def startup():
    await database.connect()

# Отключаемся от базы при остановке
@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

@app.get("/")
async def root():
    return {"message": "Phone Repair API работает!"}

@app.get("/services/", response_model=List[Service])
async def get_services(search: Optional[str] = None):
    query = services.select()
    
    if search:
        search_lower = f"%{search.lower()}%"
        query = query.where(
            (services.c.brand.ilike(search_lower)) |
            (services.c.model.ilike(search_lower)) |
            (services.c.service.ilike(search_lower)) |
            (services.c.device.ilike(search_lower))
        )
    
    return await database.fetch_all(query)

@app.post("/services/", response_model=Service)
async def create_service(service: Service):
    # Автоматически создаем device из brand и model
    if not service.device:
        service.device = f"{service.brand} {service.model}"
    
    # Проверяем на дубликаты
    existing_query = services.select().where(
        (services.c.brand == service.brand) &
        (services.c.model == service.model) &
        (services.c.service == service.service)
    )
    existing_service = await database.fetch_one(existing_query)
    
    if existing_service:
        # Обновляем существующую услугу
        query = services.update().where(services.c.id == existing_service["id"]).values(
            brand=service.brand,
            model=service.model,
            service=service.service,
            price=service.price,
            cost=service.cost,
            duration=service.duration,
            comment=service.comment,
            device=service.device
        )
        await database.execute(query)
        
        # Возвращаем обновленную услугу
        return Service(**{**existing_service, **service.dict()})
    else:
        # Добавляем новую услугу
        query = services.insert().values(
            brand=service.brand,
            model=service.model,
            service=service.service,
            price=service.price,
            cost=service.cost,
            duration=service.duration,
            comment=service.comment,
            device=service.device
        )
        service_id = await database.execute(query)
        
        # Получаем созданную услугу
        query = services.select().where(services.c.id == service_id)
        new_service = await database.fetch_one(query)
        return Service(**new_service)

@app.delete("/services/{service_id}")
async def delete_service(service_id: int):
    query = services.delete().where(services.c.id == service_id)
    result = await database.execute(query)
    
    if result == 0:
        raise HTTPException(status_code=404, detail="Услуга не найдена")
    
    return {"message": "Услуга удалена"}

# Добавляем endpoint для получения одной услуги (опционально)
@app.get("/services/{service_id}", response_model=Service)
async def get_service(service_id: int):
    query = services.select().where(services.c.id == service_id)
    service = await database.fetch_one(query)
    
    if not service:
        raise HTTPException(status_code=404, detail="Услуга не найдена")
    
    return Service(**service)
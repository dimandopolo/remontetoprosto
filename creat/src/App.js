import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import Block from './Block';
import Features from './Features';
import Feedback from './Feedback';
import Maps from './Maps';
import AW from './AW';
import Orig from './Orig';
import './Price.css';
import './media.css';
import './media2.css';
import './media2k.css';
import MetaTags from './MetaTags';
import MobileButtons from './MobileButtons';
import Popup from './Popup';

const services = [
  {
    title: "Срочный ремонт смартфона в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Выполним ремонт в день обращения. Гарантия от 30 дней. Профессиональный ремонт. Комплектующие класса Orig.",
  },
  {
    title: "Полировка Apple Watch в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Профессиональная полировка Apple Watch в Магнитогорске! Уберем даже самые глубокие царапины от 2000р. Выполним работу до 2-х часов.",
  },
  {
    title: "Ремонт iPhone в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Профессиональный ремонт вашего устройства. Комплектующие класса Orig. Гарантия от 90 дней! Выполним ремонт в день обращения.",
  },
  {
    title: "Ремонт iPad в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Профессиональный ремонт вашего устройства. Комплектующие класса Orig. Гарантия от 90 дней! Выполним ремонт в день обращения.",
  },
  {
    title: "Ремонт Macbook в Магнитогорске ",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Профессиональный ремонт вашего устройства. Комплектующие класса Orig. Гарантия от 90 дней!",
  },
 
  {
    title: "РЕМОНТ ЭТО ПРОСТО - Сервизный центр в Магнитогорске!",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Выполним ремонт в день обращения. Гарантия от 30 дней. Профессиональный ремонт. Комплектующие класса Orig.",
  },
  {
    title: "Ремонт Samsung в Магнитогорске ",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Выполним ремонт в день обращения. Гарантия от 30 дней. Профессиональный ремонт. Комплектующие класса Orig.",
  },
  {
    title: "Ремонт Xiaomi в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Выполним ремонт в день обращения. Гарантия от 30 дней. Профессиональный ремонт. Комплектующие класса Orig.",
  },
  {
    title: "Ремонт Redmi в Магнитогорске ",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Выполним ремонт в день обращения. Гарантия от 30 дней. Профессиональный ремонт. Комплектующие класса Orig.",
  },
  {
    title: "Ремонт Realme в Магнитогорске ",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Выполним ремонт в день обращения. Гарантия от 30 дней. Профессиональный ремонт. Комплектующие класса Orig.",
  },
  {
    title: "Ремонт Tecno в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Выполним ремонт в день обращения. Гарантия от 30 дней. Профессиональный ремонт. Комплектующие класса Orig.",
  },
  {
    title: "Ремонт Infinix в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Выполним ремонт в день обращения. Гарантия от 30 дней. Профессиональный ремонт. Комплектующие класса Orig.",
  },
  {
    title: "Ремонт Poco в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Выполним ремонт в день обращения. Гарантия от 30 дней. Профессиональный ремонт. Комплектующие класса Orig.",
  },
  {
    title: "Ремонт Honor в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Выполним ремонт в день обращения. Гарантия от 30 дней. Профессиональный ремонт. Комплектующие класса Orig.",
  },
  {
    title: "Ремонт Huawei в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Выполним ремонт в день обращения. Гарантия от 30 дней. Профессиональный ремонт. Комплектующие класса Orig.",
  },
  {
    title: "Ремонт Android  в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Выполним ремонт в день обращения. Гарантия от 30 дней. Профессиональный ремонт. Комплектующие класса Orig.",
  },
  {
    title: "Замена разъема зарядки  в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Выполним ремонт в день обращения. Гарантия от 30 дней. Профессиональный ремонт. Комплектующие класса Orig.",
  },
  {
    title: "Замена дисплея в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Выполним ремонт в день обращения. Гарантия от 30 дней. Профессиональный ремонт. Комплектующие класса Orig.",
  },
  {
    title: "Замена дисплейного модуля  в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Выполним ремонт в день обращения. Гарантия от 30 дней. Профессиональный ремонт. Комплектующие класса Orig.",
  },
  {
    title: "Замена дисплея в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Выполним ремонт в день обращения. Гарантия от 30 дней. Профессиональный ремонт. Комплектующие класса Orig.",
  },
  {
    title: "Замена стекла iPhone  в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Выполним ремонт в день обращения. Гарантия от 90 дней. Профессиональный ремонт. Комплектующие класса Orig.",
  },
  {
    title: "Гидрогелевая пленка на смартфон  в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Используем качественные расходные материалы. Защита устройства высочайшего качества. С гарантией на отклеивание!",
  },
  {
    title: "Стекло Remax для iPhone в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Используем качественные расходные материалы. Защита устройства высочайшего качества. С гарантией на отклеивание!",
  },
  {
    title: "Замена аккумулятора в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Выполним ремонт в день обращения. Гарантия от 30 дней. Профессиональный ремонт. Комплектующие класса Orig.",
  },
  
];

function App() {
  const [currentService, setCurrentService] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [buttonText, setButtonText] = useState("Ремонт iPhone");
  const [activeService, setActiveService] = useState("Ремонт iPhone"); // Устанавливаем по умолчанию "Ремонт iPhone"

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 10000); // Меняем услугу каждые 10 секунд

    return () => clearInterval(interval);
  }, []);

  const { title, description } = services[currentService];

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleButtonClick = (text) => {
    setButtonText(text);
    setActiveService(text); // Устанавливаем активный сервис
  };
  

  // Функция для плавного скроллинга


  return (
    <div>
      <div>
        <Header />
      </div>
      <MetaTags title={title} description={description} />
      <div>
        <Block />
      </div>
      <div>
        <Features />
      </div>
      <div className='service-block' draggable='false'>
        <h1 id='Price'>Сколько стоит ремонт?</h1>
        <div style={{ display: 'flex' }}>
          <button className="iphone" type="button" onClick={() => handleButtonClick("Ремонт iPhone")}>
            Ремонт iPhone
          </button>
          <button className="and" type="button" onClick={() => handleButtonClick("Ремонт Android")}>
            Ремонт Android
          </button>
          <button className="Not" type="button" onClick={() => handleButtonClick("Ремонт Ноутбука")}>
            Ремонт Ноутбука
          </button>
        </div>
        {activeService === "Ремонт iPhone" && (
          <table style={{ listStyle: 'none' }} className='IP'>
            <tr><th>Услуга</th><th>Гарантия</th><th>Цена</th></tr>
            <tr><td>Замена дисплейного модуля</td><td>90 дней</td><td>от 1990р</td></tr>
            <tr><td>Замена аккумулятора</td><td>90 дней</td><td>от 1590р</td></tr>
            <tr><td>Замена задней крышки</td><td>90 дней</td><td>от 2490р</td></tr>
            <tr><td>Замена разъема зарядки</td><td>90 дней</td><td>от 1490р</td></tr>
          </table>
        )}
        {activeService === "Ремонт Android" && (
          <table style={{ listStyle: 'none' }} className='IP'>
            <tr><th>Услуга</th><th>Гарантия</th><th>Цена</th></tr>
            <tr><td>Замена дисплейного модуля (ORIG)</td><td>90 дней</td><td>от 2490р</td></tr>
            <tr><td>Замена разъема зарядки</td><td>90 дней</td><td>от 1490р</td></tr>
            <tr><td>Замена аккумулятора</td><td>30 дней</td><td>от 1590р</td></tr>
            <tr><td>Чистка после попадания влаги</td><td>30 дней</td><td>от 1490р</td></tr>
          </table>
        )}
        {activeService === "Ремонт Ноутбука" && (
          <table style={{ listStyle: 'none' }} className='IP'>
            <tr><th>Услуга</th><th>Гарантия</th><th>Цена</th></tr>
            <tr><td>Чистка, замены термопасты</td><td>30 дней</td><td>от 1490р</td></tr>
            <tr><td>Замена матрицы</td><td>30 дней</td><td>от 2990р</td></tr>
            <tr><td>Замена аккумулятора</td><td>90 дней</td><td>от 2590р</td></tr>
            <tr><td>Замена разъема зарядки</td><td>90 дней</td><td>от 1990р</td></tr>
          </table>
        )}
        <a href="https://t.me/remontetoprosto1" target="_blank" rel="noopener noreferrer">
          <button className='b3'>Узнать цену в телеграм</button>
        </a>
      </div>
      <div>
        <Orig />
      </div>
      <div class="Line">
        <div class="Line1">
          <div class="Online1">
            <h1>Есть вопросы или хотите записаться на ремонт?</h1>
            <a><span class="online-status"></span>
              Мы онлайн, пишите, звоните</a>
          </div>
          <div class="Online2">
            <a href="tel:8(912)311-72-76" target="_blank" rel="noopener noreferrer">
              <button className='button2'>Связаться</button>
            </a>
            <a href="https://t.me/remontetoprosto1" target="_blank" rel="noopener noreferrer">
              <button className='button1'>Узнать цену в телеграм</button>
            </a>
          </div>
        </div>
      </div>
      <div>
        <AW />
      </div>
      <div class="PL">
        <div class="containerOr">
          <div class="IP1">
            <h1>Защита устройства</h1>
            <tr>Гидрогелевая пленка - 990р</tr>
            <tr><td>Пленка изготавливается под каждую конкретную модель.
              Минимальная толщина покрытия не увеличивает габариты устройства
              и сохраняет чувствительность экрана.</td></tr>
            <tr>Стекло Remax для iPhone - 990р</tr>
            <tr><td>Повышенная прочность. Не скалывается по краям стекла. Качественное олеофобное покрытие.</td></tr>
          </div>
          <div class="Orig12">
            <img src="Fot2.jpg" alt="Protection" className="image1" />
          </div>
        </div>
      </div>
      <div>
        <Maps />
      </div>
      <div>
        <Feedback />
      </div>
      <div>
        <Footer />
      </div>
      <div>
        <MobileButtons/>
      </div>
      <div>
        <Popup/>
      </div>

    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import ModalWindow from './ModalWindow';
import Footer from './Footer';
import './media.css';
import './media2.css';
import './media2k.css';
import MetaTags from './MetaTags';

const services = [
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
    title: "Срочный ремонт смартфона в Магнитогорске",
    description: "Сервисный центр РЕМОНТ ЭТО ПРОСТО! Выполним ремонт в день обращения. Гарантия от 30 дней. Профессиональный ремонт. Комплектующие класса Orig.",
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
  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <MetaTags title={title} description={description} />
      <header>
        <div className='header a'>
          <div>
            <a href='#Map' onClick={(e) => { e.preventDefault(); smoothScroll('#Map'); }}> Контакты </a>
          </div>
          <div>
            <a href='#Price' onClick={(e) => { e.preventDefault(); smoothScroll('#Price'); }}>Цены</a>
          </div>
          <div>
            <a href='#OTZ' onClick={(e) => { e.preventDefault(); smoothScroll('#OTZ'); }}>Отзывы</a>
          </div>
        </div>
      </header>

      <div className="parent-Block">
        <div className="window-Block">
          <a style={{ color: 'white' }}>РЕМОНТ ЭТО ПРОСТО</a>
          <h3 style={{ color: 'white' }}>Выполним услугу в день обращения</h3>
          <h2>
            <iframe id="medium_light_70000001084274876" frameBorder="0" width="0px" height="50px" sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
            <iframe src="https://yandex.ru/sprav/widget/rating-badge/210842246202?type=rating" width="150" height="50" frameBorder="0"></iframe>
          </h2>

          <a href="https://t.me/remontetoprosto1" target="_blank" rel="noopener noreferrer">
            <button className='b2'>Узнать цену в телеграм</button>
          </a>
          <a href="https://yandex.ru/maps/-/CHAWrGZD" target="_blank" rel="noopener noreferrer">
            <button className='b4'>Построить маршрут в сервис</button>
          </a>
        </div>
      </div>

      <div className='Prem'>
        <div className='Prem1'>
          <h2>
            <img src="AM1.png" alt="Бесплатная диагностика" style={{ width: '100px', height: '100px' }} />
          </h2>
          <h3>Бесплатная диагностика</h3>
          <ul>
            <li><a>При отказе от ремонта</a></li>
            <li><a>БЕСПЛАТНО!</a></li>
          </ul>
        </div>
        <div className='Prem2'>
          <h2>
            <img src="AM2.png" alt="Быстрый ремонт" style={{ width: '100px', height: '100px' }} />
          </h2>
          <h3>Быстрый ремонт</h3>
          <ul>
            <li><a>Ремонтируем типовые</a></li>
            <li><a>неисправности от 20 минут</a></li>
          </ul>
        </div>
        <div className='Prem3'>
          <h2>
            <img src="AM3.png" alt="Реальная гарантия" style={{ width: '100px', height: '100px' }} />
          </h2>
          <h3>Реальная гарантия</h3>
          <ul>
            <li><a>Минимальная гарантия</a></li>
            <li><a>от 30 дней!</a></li>
          </ul>
        </div>
        <div className='Prem4'>
          <h2>
            <img src="AM4.png" alt="Чистка устройства" style={{ width: '100px', height: '100px' }} />
          </h2>
          <h3>Чистка устройства</h3>
          <ul>
            <li><a>При ремонте чистим</a></li>
            <li><a>сетки динамиков в подарок</a></li>
          </ul>
        </div>
      </div>

      {/* Остальной контент вашего сайта */}
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
      <div class="containerOrig">
        
        <div class="containerOr">
    
        <div class="Orig">
        <h1>Качественные детали</h1>
        <tr>Дисплеи класса Original</tr>
        <tr><td>Оригинальное качество изображения, яркость и чувствительности сенсора</td></tr>
        <tr>Аккумуляторы</tr>
        <tr><td>От качественных производителей запчастей. Каждый аккумулятор проходит проверку на номинальную еммкость</td></tr>
        <tr>Шлейфа</tr>
        <tr><td>Используем только шлейфа полностью соответствуещие стандартам производятелей</td></tr>
        <tr>Кнопки</tr>
        <tr><td>Износостойкие кнопки из материалов оригинального производства</td></tr>

        </div>

       
    
    
        <div class="Orig1">
        <img src="iphone1.png" alt="Protection" className="iphone1" />
        
        </div>
        </div>
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
     

      <div class="container">
        <h1>Полировка Apple Watch</h1>
        <div class="container1">
    
        <div class="block">
        <img src="AP1.jpeg" alt="Protection" className="image5" />
        <img src="AP2.jpeg" alt="Protection" className="image6" />
        </div>
    
    
        <div class="block1">
        <p class="text-large">Есть нежелательные царапины?</p>
      <p class="text-medium">Приведем часы в состояние новых!</p>
        <tr className='button-styleAP'> Без дорогой замены стекла или дисплея</tr>
        <tr className='button-styleAP'>Уберем даже самые глубокие царапины</tr>
        <tr className='button-styleAP'>Снимем всего от 10% до 20% стекла</tr>
        <tr className='button-styleAP'>Нанесем новое олеофобное покрытие</tr>
        <tr className='button-styleAP'>Выполним ремонт за 2 часа!</tr>
        <tr className='button-styleAP'>Полировка Apple Watch от 2000р</tr>
        <a href="https://t.me/remontetoprosto1" target="_blank" rel="noopener noreferrer">
        <button className='buttonAP'>Связаться</button>
        </a>
        </div>
        
    
    </div>
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

      

      <div id='Map' className='Maps'>
        <h1>Где мы находимся?</h1>
        <div className='Maps-container'>
          <div className='Map-wrapper'>
            <div className='Tex1'>
              <li>ТРК Континент, Ленина, 83</li>
              <a href="tel:8(912)311-72-76">Тел: +7(912) 311-72-76</a>
            </div>
            <iframe src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=131035859635" width="100%" height="140%" frameBorder="0"></iframe>
            <a href="https://yandex.ru/maps/-/CHAWrGZD" target="_blank" rel="noopener noreferrer">
              <button className='b5'>ПОСТРОИТЬ МАРШРУТ В СЕРВИС</button>
            </a>
          </div>
          
        </div>
      </div>

      <div id='OTZ' className='OTZ'>
        <h1>Живые отзывы</h1>
        <div style={{ width: '100%', height: '100%', overflow: 'hidden', position: 'relative' }}>
          <iframe
            style={{
              width: '350px',
              height: '800px',
              border: '1px solid #e6e6e6',
              borderRadius: '8px',
              boxSizing: 'border-box'
            }}
            src="https://yandex.ru/maps-reviews-widget/131035859635?comments"
            title="Отзывы о Ремонт это просто"
          ></iframe>
          <a
            href="https://yandex.ru/maps/org/remont_eto_prosto/131035859635/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              boxSizing: 'border-box',
              textDecoration: 'none',
              color: '#b3b3b3',
              fontSize: '10px',
              fontFamily: 'YS Text, sans-serif',
              padding: '0 20px',
              position: 'absolute',
              bottom: '8px',
              width: '100%',
              textAlign: 'center',
              left: '0',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: 'block',
              maxHeight: '14px',
              whiteSpace: 'nowrap',
              padding: '0 16px',
              boxSizing: 'border-box'
            }}
          >
            Ремонт это просто на карте Магнитогорска — Яндекс Карты
          </a>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

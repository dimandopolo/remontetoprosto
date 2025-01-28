import React, { useState } from 'react';
import ModalWindow from './ModalWindow';
import Footer from './Footer';
import './media.css'
import './media2.css'
import './media2k.css'


function App() {
  const [showModal, setShowModal] = useState(false);
  const [buttonText, setButtonText] = useState("Ремонт iPhone");
  const [activeService, setActiveService] = useState("Ремонт iPhone"); // Устанавливаем по умолчанию "Ремонт iPhone"

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
      <header>
        <div className='header a'>
          <div>
            <a href='#Map'  onClick={(e) => { e.preventDefault(); smoothScroll('#Map'); } }> Контакты </a>
          </div>
          <div>
            <a href='#Price'  onClick={(e) => { e.preventDefault(); smoothScroll('#Price'); } }>Цены</a>
          </div>
          <div>
            <a href='#OTZ' onClick={(e) => { e.preventDefault(); smoothScroll('#OTZ'); } }>Отзывы</a>
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
            <button className='b2'>УЗНАТЬ ЦЕНУ В ТЕЛЕГРАМ</button>
          </a>
          <a href="https://yandex.ru/maps/-/CHAWrGZD" target="_blank" rel="noopener noreferrer">
            <button className='b4'>ПОСТРОИТЬ МАРШРУТ В СЕРВИС</button>
          </a>
        </div>
      </div>

      <div className='Prem'>
            
            <div className='Prem1'>
              <h2><span style={{ fontSize: '80px' }}>⭐️</span></h2>
              <h3>Бесплатная диагностика</h3>
              <ul>
                <li><a>При отказе от ремонта</a></li>
                <li><a>БЕСПЛАТНО!</a></li>
              </ul>
            </div>
            <div className='Prem2'>
            <h2><span style={{ fontSize: '80px' }}>🚀</span></h2>
              <h3>Быстрый ремонт</h3>
              <ul>
                <li><a>Ремонтируем типовые</a></li>
                <li><a>неисправности от 20 минут</a></li>
              </ul>
            </div>
            <div className='Prem3'>
            <h2><span style={{ fontSize: '80px' }}>🔥</span></h2>
              <h3>Реальная гарантия</h3>
              <ul>
                <li><a>Минимальная гарантия</a></li>
                <li><a>от 30 дней!</a></li>
              </ul>
            </div>
            <div className='Prem4'>
            <h2><span style={{ fontSize: '80px' }}>🔈</span></h2>
              <h3>Чистка устройства</h3>
              <ul>
                <li><a>При ремонте в подарок</a></li>
                <li><a>чистим сетки динамиков</a></li>
              </ul>
            </div>
            
      </div>


      <div className='service-block' draggable='false'>
      <h1 id='Price' >Сколько стоит ремонт?</h1>

      <div style={{ display: 'flex' }}>
        <button 
          style={{ float: 'right', backgroundColor: activeService === "Ремонт iPhone" ? '#2561f9' : '' }} 
          className="iphone" 
          type="button"
          onClick={() => setActiveService("Ремонт iPhone")}
        >
          <span>Ремонт iPhone</span>
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
          <tr><td>Замена дисплейного модуля</td><td>180 дней</td><td>от 1990р</td></tr>
          <tr><td>Замена аккумулятора</td><td>180 дней</td><td>от 1590р</td></tr>
          <tr><td>Замена задней крышки</td><td>180 дней</td><td>от 2490р</td></tr>
          <tr><td>Замена разъема зарядки</td><td>180 дней</td><td>от 1490р</td></tr>
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
        <button className='b3'>УЗНАТЬ ЦЕНУ В ТЕЛЕГРАМ</button>
      </a>
    </div>



      <div className='remont-block'>
        <h1>Ремонт смартфонов</h1><h2>от 20 минут</h2>
              
        
        <div className="post">
      <img src="Foto4.jpeg" alt="title" className="post-image" />
      
    </div>
    <div className="post">
      <img src="Fotoser.jpg" alt="title" className="post-image" />
     
    </div>
    <div className="post">
      <img src="Fotoset2.jpg" alt="title" className="post-image" />
      
    </div>
      </div>



      <div className='PL'>

        <h1>ЗАЩИТА УСТРОЙСТВА</h1>
        <table style={{ listStyle: 'none' }} className='IP1'>

          <tr><td class='button-style'>Гидрогелевая пленка - 690р</td></tr>
          <tr><td class='button-style'>Стекло Remax для iPhone - 790р</td></tr>

        </table>
        <img src="Fot2.jpg" alt="Protection" className="image1" />
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

          <div className='Map-wrapper'>

            <div className='Tex2'>
              <li>ул. Калинина, 21</li>
              <a href="tel:8(982) 366-92-17">Тел: +7(982) 366-92-17</a>

            </div>

            <iframe src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=210842246202" width="100%" height="140%" frameBorder="0"></iframe>

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
          {/* Другие компоненты вашего приложения */}
          <Footer />
        </div>
    </div>


  );
}

export default App;

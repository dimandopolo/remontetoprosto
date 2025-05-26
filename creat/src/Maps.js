import React from 'react';
import './Maps.css'; // Импортируйте CSS файл для стилизации футера

const Maps = () => {
    return (
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
              <button className='b5'>Построить маршрут в сервис</button>
            </a>
          </div>
          
        </div>
      </div>
    );
};

export default Maps;
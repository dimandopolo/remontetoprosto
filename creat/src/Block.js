import React from 'react';
import './Block.css'; // Импортируйте CSS файл для стилизации футера

const Block = () => {
  return (
<div className="parent-Block">
        <div className="window-Block">
          <h1 style={{ color: 'white' }}>РЕМОНТ ЭТО ПРОСТО</h1>
          <h3 style={{ color: 'white' }}>Выполним услугу в день обращения</h3>
          <h2>
            <iframe id="medium_light_70000001084274876" frameBorder="0" width="0px" height="50px" sandbox="allow-modals allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"></iframe>
            <iframe src="https://yandex.ru/sprav/widget/rating-badge/131035859635?type=rating" width="150" height="50" frameBorder="0"></iframe>
          </h2>

          <a href="https://t.me/remontetoprosto1" target="_blank" rel="noopener noreferrer">
            <button className='b2'>Узнать цену в телеграм</button>
          </a>
          <a href="https://yandex.ru/maps/-/CHAWrGZD" target="_blank" rel="noopener noreferrer">
            <button className='b4'>Построить маршрут в сервис</button>
          </a>
        </div>
      </div>
  )
}

export default Block;
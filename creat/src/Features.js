import React from 'react';
import './Features.css'; // Импортируйте CSS файл для стилизации футера

/// <summary>
/// Особенности.
/// </summary>
const Features = () => {
  return (
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
  );
};
export default Features;
import React from 'react';
import './Feedback.css'; // Импортируйте CSS файл для стилизации футера

const Feedback = () => {
  return (
    <div id='Feedback' className='Feedback'>
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
  );
};

export default Feedback;
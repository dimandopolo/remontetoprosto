import React from 'react';
import './AW.css'; // Импортируйте CSS файл для стилизации футера

const AW = () => {
    return (
        <div class="container">
        <h1 >Полировка Apple Watch</h1>
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
    );
};

export default AW;
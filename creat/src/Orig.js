import React from 'react';
import './Orig.css'; // Импортируйте CSS файл для стилизации футера

const Orig = () => {
    return (
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
    );
};

export default Orig;


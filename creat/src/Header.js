import React from 'react';
import './Header.css'; // Импортируйте CSS файл для стилизации футера

const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

const Header = () => {
    return (
        <header>
        <div className='header a'>
          <div>
            <a href='#Map' onClick={(e) => { e.preventDefault(); smoothScroll('#Map'); }}> Контакты </a>
          </div>
          <div>
            <a href='#Price' onClick={(e) => { e.preventDefault(); smoothScroll('#Price'); }}>Цены</a>
          </div>
          <div>
            <a href='#Feedback' onClick={(e) => { e.preventDefault(); smoothScroll('#Feedback'); }}>Отзывы</a>
          </div>
        </div>
      </header>
    );
};

export default Header;
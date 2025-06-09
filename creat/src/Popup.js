import React, { useState } from 'react';
import './Popup.css';

const Popup = () => {
  const [expanded, setExpanded] = useState(false);

  const handleBrandClick = (brand) => {
    // Здесь могут быть разные ссылки для каждого бренда
    const links = {
      samsung: 'https://t.me/remontetoprosto1',
      iphone: 'https://t.me/remontetoprosto1',
      xiaomi: 'https://t.me/remontetoprosto1',
      other: 'https://t.me/remontetoprosto1'
    };
    window.open(links[brand], '_blank');
  };

  return (
    <div className={`popup-container ${expanded ? 'expanded' : ''}`}>
      <div 
        className="popup-content" 
        onClick={() => !expanded && setExpanded(true)}
      >
        {expanded ? (
          <div className="popup-expanded-content">
            <div className="popup-header">
              <img src="telegramicon.png" alt="Telegram" className="telegram-icon" style={{ width: '30px', height: '30px' }} />
              <span>Узнать стоимость ремонта в Telegram</span>
              <button 
                className="popup-close" 
                onClick={(e) => {
                  e.stopPropagation();
                  setExpanded(false);
                }}
                aria-label="Закрыть"
              >
                ×
              </button>
            </div>

            <div className="popup-body">
              <div className="progress-container">
                <div className="progress-text">Шаг 1</div>
                <div className="progress-bar">
                  <div className="progress-fill"></div>
                </div>
              </div>
              <div className='Pop'>
                <a>Выберите ваше устройство</a>
              </div>

              <div className="brand-buttons">
                <button onClick={() => handleBrandClick('iphone')}>iPhone</button>
                <button onClick={() => handleBrandClick('samsung')}>Samsung</button>
                <button onClick={() => handleBrandClick('xiaomi')}>Xiaomi</button>
                <button onClick={() => handleBrandClick('other')}>Другое</button>
              </div>
            </div>
          </div>
        ) : (
          <div className="popup-preview">
             <img src="telegramicon.png" alt="Telegram" className="telegram-icon" style={{ width: '30px', height: '30px' }} />
            <span>Узнать стоимость ремонта в Telegram</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
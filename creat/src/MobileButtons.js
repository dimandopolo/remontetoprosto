import React from 'react';
import './MobileButtons.css';

const MobileButtons = ({ 
  phoneNumber = '+71234567890', 
  telegramLink = 'https://t.me/username', 
  whatsappLink = 'https://api.whatsapp.com/send?app_absent=0&phone=79823669217',
  callText = 'Позвонить'
}) => {
  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleTelegram = () => {
    window.open(telegramLink, '_blank');
  };

  const handleWhatsApp = () => {
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="mobile-buttons-wrapper">
      <div className="mobile-buttons-container">
        <button className="mobile-buttons-call" onClick={handleCall}>
          {callText}
        </button>
        
        <div className="mobile-buttons-messengers">
          <button className="mobile-buttons-telegram" onClick={handleTelegram}>
            <img src="Telegramicon2.png" alt="Telegram" style={{ width: '30px', height: '30px' }} />
          </button>
          
          <button className="mobile-buttons-whatsapp" onClick={handleWhatsApp}>
            <img src="Appicon2.png" alt="Whatsapp" style={{ width: '30px', height: '30px' }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileButtons;
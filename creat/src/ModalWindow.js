
import React, { useState, useCallback, useEffect } from 'react';
import './ModalWindow.css';

const ModalWindow = ({ show, onClose, children }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleKeyDown = useCallback((event) => {
        if (event.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (show) {
            setIsVisible(true);
            document.addEventListener('keydown', handleKeyDown);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 800);
            document.removeEventListener('keydown', handleKeyDown);
            return () => clearTimeout(timer);
        }
    }, [show, handleKeyDown]);

    useEffect(() => {
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <div className={`modal-backdrop ${show ? 'show' : ''}`} style={{ display: isVisible ? 'block' : 'none' }} onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="modal-close-button" aria-label="Close modal">X</button>
                {children}
                <div style={{ display: "flex" }}>
                    <h1>Контакты</h1>
                    <button className='button1'>Ул.Калинина, 21</button>
                    <button className='button2'>ТРК Континент</button>
                    <button className='button3'>УЗНАТЬ ЦЕНУ В ТЕЛЕГРАМ</button>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;
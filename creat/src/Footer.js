import React from 'react';
import './Footer.css'; // Импортируйте CSS файл для стилизации футера

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                
                <ul className="social-links">
                    <h1>РЕМОНТ ЭТО ПРОСТО</h1>
                    <li><a>ИП Мазуров Дмитрий Павлович</a></li>
                    <li><a>ОГРНИП 324745600105312</a></li>
                    <li><a>ИНН 744609978694</a></li>
                </ul>
                
            </div>
            <div className='Foot'>
                <li><a> ТРК Континент, пр.Ленина,83 </a></li>
                <li><a href="tel:+7(912) 311-72-76"> Тел: +7(912) 311-72-76</a></li>
                
            </div>
        </footer>
    );
};

export default Footer;
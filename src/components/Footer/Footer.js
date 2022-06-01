import React from 'react';
import './Footer.css'
import ItemsNavbar from "../Menu/ItemsNavbar";
const Footer = () => {
    return (
        <div>
            <footer className='footer-detail'>
                <ul className="footer">
                    <ItemsNavbar/>
                </ul>
                <p className='footer-text'><a href="https://github.com/EmptyPerson">Компания</a></p>
            </footer>
        </div>
    );
};

export default Footer;
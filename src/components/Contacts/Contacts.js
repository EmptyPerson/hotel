import React from 'react';
import './Contacts.css'
import Callme from "../CallMe/Callme";

const Contacts = () => {
    return (
        <div className='container-contact'>
            <div className='background-circle'>
                <div className='circle xxlarge shade1'></div>
                <div className='circle xlarge shade2'></div>
                <div className='circle large shade3'></div>
                <div className='circle mediun shade4'></div>
                <div className='circle small shade5'></div>
            </div>
            <div className='wrapper-main-text'>
                <h3 className="main-text">Контакты</h3>
            </div>
            <div className="contact-wrapper">
                <div className="ico-wrap"><i className="fa fa-map-marker ico-contact"></i>
                </div>
                <div className="descript-wrapper">
                    <h4 className="aio-icon-title">Наш фактический адрес:</h4>
                    <div className="aio-icon-description">
                        192019, г. Санкт-Петербург, ул. Мельничная,
                        <br/>дом 22, литер А, офис 28
                    </div>
                </div>

                <span className="clearfix"></span>

                <div className="ico-wrap"><i className="fa fa-clock-o ico-contact"></i>
                </div>
                <div className="descript-wrapper">
                    <h4 className="aio-icon-title">Время работы офиса и склада:</h4>
                    <div className="aio-icon-description">
                        пн.-пт. с 9:00 до 18:00, без перерыва.
                        <br/>сб, вс — выходной
                    </div>
                </div>

                <span className="clearfix"></span>

                <div className="ico-wrap">
                    <i className="fa fa-envelope ico-contact"></i>
                </div>
                <div className="descript-wrapper">
                    <h4 className="aio-icon-title">Электронная почта:</h4>
                    <div className="aio-icon-description">
                        transtrek.spb@mail.ru
                        <br/>transtrek.spb@mail.ru
                    </div>
                </div>

                <span className="clearfix"></span>

                <div className="ico-wrap">
                    <i className="fa fa-phone ico-contact"></i>
                </div>
                <div className="descript-wrapper">
                    <h4 className="aio-icon-title">Наши Телефоны:</h4>
                    <div className="aio-icon-description">
                        8 (812) 703-70-46
                        <br/>8 (812) 703-70-46
                    </div>
                </div>

                <span className="clearfix"></span>

            </div>
            <div className="map-wrapper">
                <div className="gradient-border">
                    <iframe className="map-frame"
                            src="https://yandex.ru/map-widget/v1/?um=mymaps%3AvhMXMpD3kmmslc2X2IeJdJOAjEnEIiv4&amp;source=constructor"
                            width="559" height="383" frameBorder="0"></iframe>
                </div>
            </div>
            <Callme/>
        </div>
    );
};

export default Contacts;
import React from 'react';
import './Home.css'




const descriptionText = `Если Вы планируете комфортно разместиться после долгой дороги, приглашаем в гостиницу «Дом у дороги», интерьеры комнат сочетают в себе традиции русского барокко и элементы современной архитиктуры. \n` +
    `Гостиница идеально расположена для встречи уставших путников. К услугам гостей предлагаются изысканные люксы и современные номера, которые обеспечат приятный отдых и комфортную обстановку для работы. \n` +
    `Во всех номерах имеется доступ к Интернету. В шаговой доступности расположены столовая, магазин, автомойка и автомобильный сервисный центр.`

const Home = () => {
    return (
        <div className="block">
            <div className="block-image">
                <img src={"/images/Background_home.jpg"} alt="Sorry this unavailable item"/>
                <div className="block-text">
                    <p className='text-head'>Люксовая гостиница</p>
                    <p className='text-lower'>Чувствуй себя дома</p>
                </div>
            </div>

            <div className="block-description">
                <h1 className='block-underText'>Добро пожаловать</h1>
                <p className='block-descriptionText'>{descriptionText}</p>
            </div>

        </div>

    );
};

export default Home;
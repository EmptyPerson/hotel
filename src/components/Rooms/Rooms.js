import React from 'react';
import './Rooms.css'
import Gallery from "../Gallery/Gallery";
const imgUrls = ['images/room_1.jpg','https://source.unsplash.com/lVmR1YaBGG4/800x600','https://source.unsplash.com/5KvPQc1Uklk/800x600']
const imgUrlss = ['images/room_1.jpg','https://source.unsplash.com/lVmR1YaBGG4/800x600','https://source.unsplash.com/5KvPQc1Uklk/800x600']

const Rooms = () => {
    return (
        <div className="room-container">
            <div className="background-image">
                <img src='images/Background_rooms.jpg' alt="Sorry this unavailable item"/>
                <div className="text-container">
                    <p className='phrase-lower'>Выбери свой дом</p>
                </div>
            </div>

            <div className="rooms">
                <h1>Аппартаменты</h1>
                <p>1. Одноместный номер</p>
                <Gallery imgs = {imgUrls}/>
                <p>2. Одноместный номер</p>
                <Gallery imgs = {imgUrlss}/>
                <p>3. Двухместный номер</p>
                <Gallery imgs = {imgUrls}/>
                <p>4. Одноместный номер</p>
                <Gallery imgs = {imgUrls}/>
                <p>5. Одноместный номер</p>
                <Gallery imgs = {imgUrls}/>
                <p>6. Двухместный номер</p>
                <Gallery imgs = {imgUrls}/>
            </div>
        </div>
    );
};

export default Rooms;
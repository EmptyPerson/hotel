import React from 'react';
import './Rooms.css'
import Gallery from "../Gallery/Gallery";
const imgUrls = ['images/room.jpg','images/room_1.jpg','images/room.jpg']
const imgUrlss = ['images/room.jpg','images/room_1.jpg','images/room.jpg']

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
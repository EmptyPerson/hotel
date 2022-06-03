import React from 'react';
import cls from './Booking.module.css'
import './Booking.css'

const Booking = () => {
    return (
        // <div className={cls.parent}>
        //     <div className={cls.child_1}>One</div>
        //     <div className={cls.child_2}>Two</div>
        //     <div className={cls.child_3}>Three</div>
        // </div>
        <div>
        <div className="imgLoader"></div>

    <div className="container-booking">

        <h1 className="title-booking">
            Turning pages
        </h1>

        <div className="credit">
            * Images loaded randomly from Picsum.photos
        </div>

        <div className="book">
            <div className="gap"></div>
            <div className="pages">
                <div className="page"></div>
                <div className="page"></div>
                <div className="page"></div>
                <div className="page"></div>
                <div className="page"></div>
                <div className="page"></div>
            </div>
            <div className="flips">
                <div className="flip flip1">
                    <div className="flip flip2">
                        <div className="flip flip3">
                            <div className="flip flip4">
                                <div className="flip flip5">
                                    <div className="flip flip6">
                                        <div className="flip flip7"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <a href="https://twitter.com/amit_sheen" className="twitterLink" target="_top">
        <img src="https://assets.codepen.io/1948355/twitterLogo2.png"/>
    </a>
        </div>
    );
};

export default Booking;
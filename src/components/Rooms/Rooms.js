import React from 'react';
import './Rooms.css'

const Rooms = () => {
    return (
        <div className="room-container">
        <div className="container-booking">
            <div className="imgLoader"></div>

            <div className="booking">

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
        </div>
            <form id="contact-form" action="http://api.formsubmits.com/forms/1135921e-c7db-48c3-85d0-3b9b6d8e855c/submit" method="POST">
                <fieldset>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea name="messsage" rows="10"></textarea>
                    </div>
                    <div>
                        <input type="submit" value="Send" />
                    </div>
                </fieldset>
            </form>
        </div>
    );
};

export default Rooms;
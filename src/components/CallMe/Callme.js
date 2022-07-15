import React, {useState, useEffect} from 'react';
import  './Callme.css'
import Modal from "../Modal/Modal";
import {mail, Request, CodeSuccess, API} from "../API/API";
import $ from "jquery";
import PreLoad from "../PreLoad/PreLoad";


const Callme = () => {
    const [clientInfo, setClientInfo] = useState({
        name: '',
        phone: '',
    })
    const [modalActive, setModalActive] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")
    const [isLoad, setIsLoad] = useState(false)
    const messageObj = {
        'Имя гостя': clientInfo.name,
        'Телефон': clientInfo.phone
    }
    let messageText = `'Имя: ' + ${clientInfo.name} + ' Телефон: ' + ${clientInfo.phone}`
    let anotherWay = document.createElement('form')
    anotherWay.action = `mailto:${mail}?subject=Booking&body=${messageText}`
    anotherWay.method = 'post'
    anotherWay.encType = 'text/plain'

    useEffect(() => {
        $(document).ajaxStart(function() {
            setIsLoad(true)
        });
        $(document).ajaxStop(function() {
            setIsLoad(false);
        });
    });

    return (
        <div className="contact-form">
            <div className="contact-page-section">
                {/*<div className='wrapper-second-text'>*/}
                {/*    <h3 className="main-text">Мы вам перезвоним</h3>*/}
                {/*</div>*/}
                <div className="inner-container">
                    <div className="row clearfix">
                        <div className="form-column">
                            <div className="inner-column">
                                <div className='wrapper-second-text'>
                                    <h3 className="main-text">Мы вам перезвоним</h3>
                                </div>
                                <div className="contact-form">
                                    <form noValidate>
                                        <div className="row clearfix">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={clientInfo.name}
                                                    placeholder="Имя"
                                                    onChange={(e) => (setClientInfo({...clientInfo, name: e.target.value}))}
                                                       required/>
                                            </div>

                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    value={clientInfo.phone}
                                                    placeholder="Телефон"
                                                    onChange={(e) => (setClientInfo({...clientInfo, phone: e.target.value}))}
                                                       required/>
                                            </div>

                                        </div>
                                    </form>
                                    <div className="form-group">
                                        <button className="theme-btn btn-style-one"
                                            onClick={async (e) => {
                                                if (clientInfo.name && clientInfo.phone) {
                                                    for (let i = 0; i < API.length; i++) {
                                                        const response = await Request(messageObj, API[i], CodeSuccess)
                                                        if (!response) {
                                                            console.log(response)
                                                            console.log(`Used API url from array: array index ${i}`)
                                                            setAlertMessage("Ваша заявка принята")
                                                            setModalActive(true)
                                                            setClientInfo({...clientInfo, name: '', phone: ''})
                                                            break
                                                        }
                                                        if (i === API.length - 1 && response) {
                                                            document.body.append(anotherWay)
                                                            anotherWay.submit()
                                                            setAlertMessage("Ваша заявка принята")
                                                            setModalActive(true)
                                                            setClientInfo({...clientInfo, name: '', phone: ''})
                                                        }
                                                    }
                                                } else {
                                                    setAlertMessage("Заполните имя и телефон")
                                                    setModalActive(true)
                                                }
                                            }}
                                        >Отправить
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal  active={modalActive} setActive={setModalActive}>
                <h1 className='alert-text'>{alertMessage}</h1>
            </Modal>
            <PreLoad active = {isLoad}></PreLoad>
        </div>
    );
};

export default Callme;
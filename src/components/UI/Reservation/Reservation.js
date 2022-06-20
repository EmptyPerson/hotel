import React, {useEffect, useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Reservation.css'
import axios from "axios";
import $ from "jquery"
import Modal from "../../Modal/Modal";

const APIurl = [
    'https://api.formsubmits.com/forms/98cd273f-fc7f-46e2-a831-31e1169505c1/submit',
    'https://api.formsubmits.com/forms/0ffe80df-6fc0-48b9-851d-a91479522241/submit'
]
const CodeSuccessAPI = '6AlJaXhWRSrtHTUb'
const mailForSent = 'vladislav.bulahov@yandex.ru'

const DateToday =  (today = new Date, countDays = 0) => {

    let dd = today.getDate() + countDays;
    let mm = today.getMonth() + 1; //January is 0!
    let hh = today.getHours();
    let min = today.getMinutes();
    const yyyy = today.getFullYear();

    if(dd < 10) dd='0'+dd;
    if(mm < 10) mm='0'+mm;
    if (hh < 10) hh = '0' + hh;
    if (min < 10) min = '0' + min;
    today = yyyy + '-' + mm + '-' + dd + 'T' + hh + ':' + min;
    return today
}

const Reservation = () => {
    const [form, setForm] = useState({
        name:'',
        phone: '',
        mail: '',
        countAdults: 1,
        countChildren: 1,
        dateArrived: DateToday(),
        dateOut: DateToday(new Date, 1),
        roomsNumber: [1, 2, 3, 4, 5, 6, 7],
        choseRoom: '1'
    })

    const [validEmail, setValidEmail] = useState(true)
    const [modalActive, setModalActive] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")

    const messageText = `Имя гостя: ${form.name}\n
                          Электронная почта: ${form.mail}\n
                          Телефон: ${form.phone}\n
                          Количество взрослых: ${form.countAdults}\n
                          Количество детей: ${form.countChildren}\n
                          Дата прибытия: ${form.dateArrived}\n
                          Дата уезда: ${form.dateOut}\n
                          Выбранная комната: ${form.choseRoom}\n`

    const messageObj = {
        'Имя гостя': form.name,
        'Электронная почта': form.mail,
        'Телефон': form.phone,
        'Количество взрослых': form.countAdults,
        'Количество детей': form.countChildren,
        'Дата прибытия': form.dateArrived,
        'Дата уезда': form.dateOut,
        'Выбранная комната': form.choseRoom,

    }

    let secondForm = document.createElement('form');
    secondForm.action = `mailto:${mailForSent}?subject=Booking&body=${messageText}`
    secondForm.method = 'post'
    secondForm.encType = 'text/plain'

    const RequestAPI = async function(message, url, codeSuccess){
        let flagError = true //if true you need to send new requestAPI
        try {
        $.ajax({
            url: url,
            method: 'post',
            async: false,
            dataType: 'html',
            data: message,
            success: function(data){

                console.log(data);
                if (data.indexOf(codeSuccess, 0) == -1 || data.toUpperCase().indexOf('ERROR', 0) != -1) {
                        console.log('something wrong with API server')
                    } else
                    {
                        flagError = !flagError;
                        console.log('goodServer')
                    }

            }
        });

        } catch (e)  {
            console.log(e);
            flagError = !flagError;
        }

        return flagError;
    }

    useEffect(() => {
        const email = document.getElementById('mail');
        const textError = document.getElementById('textError');
        const emailError = document.querySelector('#mail + span.error');

        email.onchange = () => {
            // Каждый раз, когда пользователь что-то вводит,
            // мы проверяем, являются ли поля формы валидными

            if (email.validity.valid) {
                // Если на момент валидации какое-то сообщение об ошибке уже отображается,
                // если поле валидно, удаляем сообщение
                textError.textContent = ''; // Сбросить содержимое сообщения
                emailError.className = 'error'; // Сбросить визуальное состояние сообщения
                textError.className = 'error'
                setValidEmail(true)

            } else {
                setValidEmail(false)
                console.log('NE valid')
                textError.className = 'error active'
                showError();
            }

        }
        // email.addEventListener('input', function () {
        //     // Каждый раз, когда пользователь что-то вводит,
        //     // мы проверяем, являются ли поля формы валидными
        //
        //     if (email.validity.valid) {
        //         // Если на момент валидации какое-то сообщение об ошибке уже отображается,
        //         // если поле валидно, удаляем сообщение
        //         emailError.textContent = ''; // Сбросить содержимое сообщения
        //         emailError.className = 'error'; // Сбросить визуальное состояние сообщения
        //         setValidEmail(true)
        //
        //     } else {
        //         setValidEmail(false)
        //         console.log('NE valid')
        //         showError();
        //     }
        //
        // });

        function showError() {
            if(email.validity.typeMismatch) {
                textError.textContent = 'Введите корректный адрес электронной почты.';
            }
            textError.className = 'error active'
            //textError.className = 'error active';
        }
    });



    return (
        <div className='container-reservation-con'>
        <div className='container-reservation'>

            {/*{document.body.append(secondForm)}*/}
            {/*{secondForm.submit()}*/}
            {/*{document.body.append(firstForm)}*/}
            {/*{ respons= firstForm.submit}*/}
            {/*{console.log(state)}*/}
            {/*{console.log(respons)}*/}
            <form noValidate>
                <label>Имя</label>
                <input
                    value= {form.name}
                    type="text"
                    placeholder="Имя"
                    onChange={e => (
                        setForm({...form, name: e.target.value}))}
                />
                <h1>Телефон</h1>
                <input
                    value= {form.phone}
                    type="text"
                    placeholder="Телефон"
                    onChange={e => (
                        setForm({...form, phone: e.target.value}))}
                />
                <h1>Email</h1>
                <input value= {form.mail}
                       id="mail"
                       type="email"
                       placeholder="Email"
                       onChange={e => (

                           setForm({...form, mail: e.target.value}))}
                />
                <span className={validEmail ? 'error': 'error active'} aria-live="polite" id='textError'></span>
                <h1>Количество взрослых</h1>
                <input value= {form.countAdults}
                       type="number"
                       placeholder="Количество взрослых"
                       min={1}
                       onChange={e => (
                           setForm({...form, countAdults: Number(e.target.value)}))}
                />
                <h1>Количество детей</h1>
                <input value= {form.countChildren}
                       type="number"
                       placeholder="Количество детей"
                       onChange={e => (
                           setForm({...form, countChildren: Number(e.target.value)}))}
                />
                <h1>Дата прибытия</h1>
                <input value={`${form.dateArrived}`} type="datetime-local"
                       placeholder="Дата прибытия"
                       min={`${DateToday(new Date(new Date().setHours(0, 0, 0)))}`}
                       onChange={e => (
                           setForm({...form, dateArrived: e.target.value}))}
                />
                <h1>Дата уезда</h1>
                <input value={`${form.dateOut}`}
                       type="datetime-local"
                       placeholder="Дата уезда"
                       min={`${DateToday(new Date(new Date().setHours(0, 0, 0)))}`}
                       onChange={e => (
                           setForm({...form, dateOut: e.target.value}))}
                />
                <h1>Выбор комнаты</h1>
                {/*<input value= {form.roomNumber} type="text" placeholder="Выбор комнаты"/>*/}
                <select name="Номер комнаты" required="required"
                        onChange={e => {setForm({...form, choseRoom: e.target.value})}}
                >
                    {form.roomsNumber.map((room) =>
                        { return <option key={room}

                            value={room}
                        >{room}</option>}
                    )}
                </select>

            </form>
            <div className="send-button">
            <button onClick={
                async (e) => {
                    e.preventDefault()
                    if (form.name) {
                        if (form.phone || form.mail) {
                           //  let mail = $( "#mail" )
                           // console.log(mail)
                            if (form.phone || (form.mail && validEmail)) { //if phone is not null this validEmail would be notValid\false
                                for (let i = 0; i < APIurl.length; i++) {
                                    const response = await RequestAPI(messageObj, APIurl[i], CodeSuccessAPI)

                                    if (!response) {
                                        console.log(response)
                                        console.log(i)
                                        setForm({
                                            name:'',
                                            phone: '',
                                            mail: '',
                                            countAdults: 1,
                                            countChildren: 1,
                                            dateArrived: DateToday(),
                                            dateOut: DateToday(new Date, 1),
                                            roomsNumber: [1, 2, 3, 4, 5, 6, 7],
                                            choseRoom: '1'
                                        })
                                        setValidEmail(true)
                                        setAlertMessage("Ваша заявка принята")
                                        setModalActive(true)
                                        break
                                    }
                                    if (i === APIurl.length - 1 && response) {
                                        document.body.append(secondForm)
                                        secondForm.submit()
                                        setAlertMessage("Ваша заявка принята")
                                        setModalActive(true)
                                    }
                                }
                            }
                        } else {
                            setAlertMessage("Введите телефон или Email")
                            setModalActive(true)
                                //alert('Заполните телефон или Email')
                        }
                    } else {
                        setAlertMessage("Введите Ваше имя")
                        setModalActive(true)
                        //alert('Заполните имя')
                    }
                }

            }>Подтвердить</button>
            </div>
            {/*<button onClick={async () => {*/}
            {/*    document.body.append(secondForm)*/}
            {/*    secondForm.submit()*/}

            {/*}}> axio</button>*/}

            {/*<button onClick={*/}
            {/*   async (e) => {*/}
            {/*       for (let i = 0; i < APIurl.length; i++) {*/}
            {/*           const response = await RequestAPI(messageObj, APIurl[i], CodeSuccessAPI)*/}

            {/*           if (!response) {*/}
            {/*               console.log(response)*/}
            {/*               console.log(i)*/}
            {/*               break*/}
            {/*           }*/}

            {/*           if (i === APIurl.length - 1 && response) {*/}
            {/*               document.body.append(secondForm)*/}
            {/*               secondForm.submit()*/}
            {/*           }*/}
            {/*        }*/}
            {/*   }*/}
            {/*}>Test</button>*/}
            <Modal active={modalActive} setActive={setModalActive}>
                <h1>{alertMessage}</h1>
            </Modal>
            {/*<button onClick={() => setModalActive(true)}>Modal</button>*/}
        </div>
        </div>
    );
};

export default Reservation;
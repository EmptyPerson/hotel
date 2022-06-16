import React, {useEffect, useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './Reservation.css'
import axios from "axios";
import $ from "jquery"

const APIurl = [
    'https://api.formsubmits.com/forms/98cd273f-fc7f-46e2-a831-31e1169505c1/submit', 
    'https://api.formsubmits.com/forms/0ffe80df-6fc0-48b9-851d-a91479522241/submit'
]
const CodeSuccessAPI = '6AlJaXhWRSrtHTUb'

const DateToday =  (today = new Date, countDays = 0) => {

    let dd = today.getDate() + countDays;
    let mm = today.getMonth() + 1; //January is 0!
    let hh = today.getHours();
    let min = today.getMinutes();

    const yyyy = today.getFullYear();
    if(dd < 10){
        dd='0'+dd;
    }
    if(mm < 10){
        mm='0'+mm;
    }
    if (hh < 10) hh = '0' + hh;
    if (min < 10) min = '0' + min;

    today = yyyy + '-' + mm + '-' + dd + 'T' + hh + ':' + min;
    return today
}
    async function getUser() {
        try {
            const response = await axios.get('formspree.io/f/xwkyzvno');
            console.log(response);
        } catch (error) {
            console.error(error);
        }
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


    const [state, handleSubmit] = useForm("xwkyzvno");

    let firstForm = document.createElement('form');
    firstForm.action = 'https://api.formsubmits.com/forms/98cd273f-fc7f-46e2-a831-31e1169505c1/submit'
    firstForm.method = 'POST'
   // firstForm.onsubmit = handleSubmit
    // firstForm.outerHTML = `<form id="sub"><label for="email">Email Address</label><input id="email" type="email" name="email" class="test" disabled="" value="vladislav.bulahov@yandex.ru"><input type="text" id="message" name="message" placeholder="Имя" value=""><textarea id="message" name="message">1</textarea><button type="submit">Submit</button></form>'`
    firstForm.innerHTML = `<input id="email" type="email" name="email" class="test" disabled="" value="vladislav.bulahov@yandex.ru"><input type="text" id="message" name="message" placeholder="Имя" value=""><textarea id="message" name="message">1</textarea>`

    let secondForm = document.createElement('form');
    secondForm.action = 'mailto:you@yourdmainhere.com?subject=Interesting information&body=I thought you might find this information interesting: '
    secondForm.method = 'post'
    secondForm.encType = 'text/plain'

    // const messageText = `Имя гостя: ${form.name}\n
    //                       Электронная почта: ${form.mail}\n
    //                       Телефон: ${form.phone}\n
    //                       Количество взрослых: ${form.countAdults}\n
    //                       Количество детей: ${form.countChildren}\n
    //                       Дата прибытия: ${form.dateArrived}\n
    //                       Дата уезда: ${form.dateOut}\n
    //                       Выбранная комната: ${form.choseRoom}\n
    //                       `
    const messageText = {
        'Имя гостя': form.name,
        'Электронная почта': form.mail,
        'Телефон': form.phone,
        'Количество взрослых': form.countAdults,
        'Количество детей': form.countChildren,
        'Дата прибытия': form.dateArrived,
        'Дата уезда': form.dateOut,
        'Выбранная комната': form.choseRoom
    }

    const RequestAPI = function(message, url, codeSuccess){
        let flagError = true //if true you need to send new requestAPI
        try {
        $.ajax({
            url: url,
            method: 'post',
            async: false,
            dataType: 'html',
            data: message,
            success:  function(data){
                // obj = data;
                $('.ajaxx').text(data)
                console.log(data);
                // $(data).filter().slice(0, 3).end().end().slice(3)[2].innerHTML.indexOf('Error', 0) != -1
                    if (data.indexOf(codeSuccess, 0) === -1 || data.toUpperCase().indexOf('ERROR', 0) != -1) {
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

        return flagError; // возвращаем полученное значение ajax-запроса
    }
    // useEffect(() => {
    //     $("document").ready(function() {
    //     /* запускаем скрипт после полной загрузки документа */
    //     let $a = $('.contactform')
    //     console.log($a)
    //     /* вешаем событие на ранее созданную форму */
    //     $('.contactform').on("submit", function() {
    //         /* создаём объект с данными из полей */
    //         //let formData = new FormData($.this)
    //         /* добавляем дополнительные данные для отправки */
    //         // formData.append("url_query", "prog-time");
    //         /* записываем в переменную данные картинок из формы */
    //         // let allfiles = $(this).find('input[name="fileImage"]');
    //
    //         /* пробегаем покартинкам и записываем их в массив для отправки */
    //         // for(var i = 0; i &lt; allfiles[0].files.length; i++){
    //         //     formData.append("file_"+i, allfiles[0].files[i]);
    //         // }
    //
    //         /* отправляем AJAX запрос */
    //         $.ajax({
    //             method: 'post',
    //             dataType: 'html',
    //             url: 'http://api.formsubmits.com/forms/98cd273f-fc7f-46e2-a831-31e1169505c1/submit',
    //
    //             data: 0,
    //             success: function(data){
    //                 console.log(data)
    //             },
    //
    //         });
    //         })
    //
    //     })
    //
    //
    // }, [])
    return (
        <div className='container-reservation'>
            <p className='ajaxx'>Nfnf</p>
            {/*{document.body.append(secondForm)}*/}
            {/*{secondForm.submit()}*/}
            {/*{document.body.append(firstForm)}*/}
            {/*{ respons= firstForm.submit}*/}
            {/*{console.log(state)}*/}
            {/*{console.log(respons)}*/}
            <form>
                <h1>Имя</h1>
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
                       type="text"
                       placeholder="Email"
                       onChange={e => (
                           setForm({...form, mail: e.target.value}))}
                />
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
                <button onClick={
                    (e) => {
                        e.preventDefault()
                        if (form.name) {
                            if (form.phone || form.mail) {
                                console.log(form.countAdults)
                            } else {
                                alert('Заполните телефон или Email')
                            }
                        } else {
                            alert('Заполните имя')
                        }
                    }

                }>Подтвердить</button>
            </form>
            {/*<form action="mailto:you@yourdmainhere.com" method="post"*/}
            {/*      encType="text/plain">*/}
            {/*    FirstName:<input type="text" name="FirstName"/>*/}
            {/*    Email:<input type="text" name="Email"/>*/}
            {/*    <input type="submit" name="submit" value="Submit"/>*/}
            {/*</form>*/}
            <form onSubmit={handleSubmit} id="sub">
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value='vladislav.bulahov@yandex.ru'
                    className='test'
                    disabled
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <input
                    value= {form.name}
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Имя"
                    onChange={e => (
                        setForm({...form, name: e.target.value}))}
                />
                <textarea
                    id="message"
                    name="message"
                    value={form.countAdults}

                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit"  disabled={state.submitting} onClick={(e) =>
                {
                    e.preventDefault()
                    console.log(state);
                    let form_1 = window.document.getElementById('sub')

                         console.log(form_1)

                    if (state.succeeded) {
                    return alert('Ваша заявка принята');}
                }}>
                    Submit
                </button>
            </form>
            <button    disabled={state.submitting} onClick={(e) =>
            {e.preventDefault()
                console.log(state);
                // document.body.append(firstForm)

                // await firstForm.submit((e) => {e.preventDefault()
                //     return handleSubmit})
                // let form_1 = window.document.getElementById('sub')
                // for ( let key in form_1) {
                //     console.log(form_1[key])
                // }
                document.body.append(firstForm)
                let  a = firstForm.submit()
                    console.log(a)
                if (state.succeeded) {
                    return alert('Ваша заявка принята');}
                window.location.href="http://localhost:3000/booking";
                if (state.succeeded) {
                    return alert('Ваша заявка принята');}

            }}>
                Подтверд
            </button>
            <button onClick={async () => {
                const messageText = `Имя гостя: ${form.name}\n
                          Электронная почта: ${form.mail}\n
                          Телефон: ${form.phone}\n
                          Количество взрослых: ${form.countAdults}\n
                          Количество детей: ${form.countChildren}\n
                          Дата прибытия: ${form.dateArrived}\n
                          Дата уезда: ${form.dateOut}\n
                          Выбранная комната: ${form.choseRoom}\n
                          `
                document.body.append(firstForm)
                try {
               let response = await axios
                    .post("https://formspree.io/f/xbjwbyzy", {
                        firstForm})
                console.log(response)} catch (err){console.log(err)}
                    // .then(response => console.log(response))
                    // .catch(error => console.log(error))
                // if (response.status != 200) {
                //     console.log(`Code error:${response.status} + \n + ${response.data.error}`)
                // }
            }}> axio</button>
            <button onClick={
               async (e) => {
                   for (let i = 0; i < APIurl.length; i++) {
                       //let response_2 = null
                       const response = await RequestAPI(messageText, APIurl[i], CodeSuccessAPI)

                       if (!response) {
                           console.log(response)
                           console.log(i)
                           break
                       }

                       // console.log(response_2)

                    }
               }
            }>Test</button>

            <form className="contactform" onsubmit="return false">
                <fieldset>
                    <div>
                        <label>Name</label>
                        <input type="text" name="name" value="Vlad"/>
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" value='vladislav.bulahov@yandex.ru'/>
                    </div>
                    <div>
                        <label>Message</label>
                        <textarea name="messsage" rows="1" value="dsad"></textarea>
                    </div>

                        <input type="submit" value="Send" />

                </fieldset>
            </form>
            <button onClick={(e) => {
                /* запускаем скрипт после полной загрузки документа */
                let $a = $('.contactform')
                console.log($a)
  /* вешаем событие на ранее созданную форму */
                $('.contactform').on("submit", function() {
    /* создаём объект с данными из полей */
                 //let formData = new FormData($.this)
    /* добавляем дополнительные данные для отправки */
                // formData.append("url_query", "prog-time");
                /* записываем в переменную данные картинок из формы */
                // let allfiles = $(this).find('input[name="fileImage"]');

                /* пробегаем покартинкам и записываем их в массив для отправки */
                // for(var i = 0; i &lt; allfiles[0].files.length; i++){
                //     formData.append("file_"+i, allfiles[0].files[i]);
                // }

                /* отправляем AJAX запрос */
                $.ajax({
                    type: "POST",
                    url: 'http://api.formsubmits.com/forms/98cd273f-fc7f-46e2-a831-31e1169505c1/submit',
                    contentType: false,
                    processData: false,
                    data: 0,
                    success: function(data){
                        console.log(data)
                    },


            })

            })

            }
            }>
                ajex
            </button>
        </div>
    );
};

export default Reservation;
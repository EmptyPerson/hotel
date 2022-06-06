import React, {useState} from 'react';
import './Reservation.css'


const DateToday =  (today = new Date, countDays = 0) => {

    let dd = today.getDate() + countDays;
    let mm = today.getMonth() + 1; //January is 0!
    let hh = today.getHours();
    let min = today.getMinutes();

    const yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd;
    }
    if(mm<10){
        mm='0'+mm;
    }
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


    return (
        <div className='container-reservation'>
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
        </div>
    );
};

export default Reservation;
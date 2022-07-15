import React, {useState} from "react";
import Navbar from "./components/Menu/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import './App.css'
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Rooms from "./components/Rooms/Rooms";
import Reservation from "./components/UI/Reservation/Reservation";
import {NavBarContext} from "./context";
import Contacts from "./components/Contacts/Contacts";


function App() {
    const [ActiveRow, setActiveRow] = useState([
        {id: 1, text: 'Главная', activeF: false, header: 'home'},
        {id: 2, text: 'Галлерея', activeF: false, header: 'gallery'},
        {id: 3, text: 'Комнаты', activeF: false, header: 'rooms'},
        {id: 4, text: 'Бронирование', activeF: false, header: 'booking'},
        {id: 5, text: 'Контакты', activeF: false, header: 'contacts'}
    ])
    return (
        <div className='app'>
            <NavBarContext.Provider value={{
                ActiveRow,
                setActiveRow
            }}>
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        <Route exact path='/home' element={<Home/>}/>
                        <Route exact path='/' element={<Home/>}/>
                        <Route exact path='/gallery' element={<About/>}/>
                        <Route exact path='/rooms' element={<Rooms/>}/>
                        <Route exact path='/booking' element={<Reservation/>}/>
                        <Route exact path='/contacts' element={<Contacts/>}/>
                        <Route
                            path="*"
                            element={<Home/>}
                        />
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </NavBarContext.Provider>
        </div>
    );
}

export default App;

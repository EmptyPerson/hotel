import React from "react";
import Navbar from "./components/Menu/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import './App.css'
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Rooms from "./components/Rooms/Rooms";
import Reservation from "./components/UI/Reservation/Reservation";

function App() {
    return (
        <div className='app'>

            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route exact path='/home' element={<Home/>}/>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/gallery' element={<About/>}/>
                    <Route exact path='/rooms' element={<Rooms/>}/>
                    <Route exact path='/booking' element={<Reservation/>}/>
                    <Route
                        path="*"
                        element={<Home/>}
                    />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;

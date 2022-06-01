import React from "react";
import Navbar from "./components/Menu/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import './App.css'
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className='app'>

            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route exact path='/home' element={<Home/>}/>

                    <Route exact path='/about' element={<About/>}/>

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

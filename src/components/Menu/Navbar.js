import React, {useState} from 'react';
import './Navbar.css'
import ItemsNavbar from "./ItemsNavbar";

const Navbar = () => {

   const [activeNavbar, setActiveNavbar] = useState(false)

    return (

            <div className="container-navbar">
                <ul className={activeNavbar ? "hide_navbar": "menu-main"}>
                    <div className="home-text">
                        <li className="title"><p>Дом у дороги</p></li>
                    </div>
                    <ItemsNavbar active = {activeNavbar} setActive = {setActiveNavbar}/>
                </ul>
                <label htmlFor="active" className="menu-btn" onClick={() => {setActiveNavbar(!activeNavbar)}}><span></span></label>
                {/*<label htmlFor="active" className="close"></label>*/}
            </div>

    );
};

export default Navbar;
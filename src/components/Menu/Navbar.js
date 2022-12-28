import React from 'react';
import './Navbar.css'
import ItemsNavbar from "./ItemsNavbar";
import {useContext} from "react";
import {NavBarContext} from "../../context";

const Navbar = () => {

   // const [activeNavbar, setActiveNavbar] = useState(false)
    const {isActiveNavbar, setIsActiveNavbar} = useContext(NavBarContext)
    return (

            <div className="container-navbar">
                <ul className={isActiveNavbar ? "hide_navbar": "menu-main"}>
                    <div className="home-text">
                        <li className="title"><p>Дом у дороги</p></li>
                    </div>
                    <ItemsNavbar active = {isActiveNavbar} setActive = {isActiveNavbar}/>
                </ul>
                <label htmlFor="active" className="menu-btn" onClick={() => {setIsActiveNavbar(!isActiveNavbar)}}><span></span></label>
                {/*<label htmlFor="active" className="close"></label>*/}
            </div>

    );
};

export default Navbar;
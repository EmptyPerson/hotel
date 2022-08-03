import React from 'react';
import './Navbar.css'
import ItemsNavbar from "./ItemsNavbar";

const Navbar = () => {
    // const [ActiveRow, setActiveRow] = useState([
    //     {id: 1, text: 'Home', activeF: false},
    //     {id: 2, text: 'LikeHeart', activeF: false},
    //     {id: 3, text: 'Blog', activeF: false},
    //     {id: 4, text: 'Contacts', activeF: false}
    // ])
    //
    // const activate = (e) => {
    //    // e.preventDefault()
    //     setActiveRow(ActiveRow.map((item)=>
    //     {if (item.id == e.target.id) {
    //         item.activeF = !e.target.activeF
    //     } else {item.activeF = false}
    //         return item}))
    //     // мутации быть не должно так как возвращается новый массив
    //     //setActiveRow(ActiveRow.map((item)=> (item.id = e.target.id ? {...item, activeF: !e.target.activeF} : item)))
    // }

    return (

            <div className="container-navbar">
                <ul className="menu-main">
                    <div className="home-text">
                        <li className="title"><p>Дом у дороги</p></li>
                    </div>
                    <ItemsNavbar />
                </ul>
            </div>

    );
};

export default Navbar;
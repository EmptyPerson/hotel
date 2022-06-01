import React, {useState} from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'

const ItemsNavbar = () => {
    const [ActiveRow, setActiveRow] = useState([
        {id: 1, text: 'Home', activeF: false},
        {id: 2, text: 'About', activeF: false},
        {id: 3, text: 'Blog', activeF: false},
        {id: 4, text: 'Contacts', activeF: false}
    ])

    const activate = (e) => {
        // e.preventDefault()
        setActiveRow(ActiveRow.map((item)=>
        {if (item.id == e.target.id) {
            item.activeF = !e.target.activeF
        } else {item.activeF = false}
            return item}))
        // мутации быть не должно так как возвращается новый массив
        //setActiveRow(ActiveRow.map((item)=> (item.id = e.target.id ? {...item, activeF: !e.target.activeF} : item)))
    }
    return (
        <div>
            {ActiveRow.map((item) => (
                <li key={item.id}>
                    <Link className={item.activeF ? "current": null} to={item.text.toLowerCase()} id={item.id} onClick={activate}>
                        {item.text}
                    </Link>

                </li>
            ))}
        </div>
    );
};

export default ItemsNavbar;
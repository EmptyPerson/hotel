import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'
import {NavBarContext} from "../../context";

const ItemsNavbar = () => {

    const {ActiveRow, setActiveRow} = useContext(NavBarContext)
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
        <div className="nav-wrapper">
            {ActiveRow.map((item) => (
                <li key={item.id}>
                    <Link className={item.activeF ? "current": null} to={item.header} id={item.id} onClick={activate}>
                        {item.text}
                    </Link>

                </li>
            ))}
        </div>
    );
};

export default ItemsNavbar;
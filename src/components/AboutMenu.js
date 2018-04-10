import React from 'react';
import { NavLink } from 'react-router-dom';

const selectedStyle = {
    backgroundColor: "green",
    color: "slategray"
}

const AboutMenu = ({match}) =>
    <div className="about-menu">
        <li>
            <NavLink to="/about" >
                [Компанії підрядники]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/history" activeStyle={selectedStyle}>
                [Історія]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/services" activeStyle={selectedStyle}>
                [Сервіси]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/location" activeStyle={selectedStyle}>
                [Розташування]
            </NavLink>
        </li>
    </div>

export default AboutMenu;    
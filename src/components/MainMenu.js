import React from 'react';
import { NavLink } from 'react-router-dom';

const selectedStyle = {
    backgroundColor: "red",
    color: "slategray"
}

const MainMenu = () =>
    <nav className="main-menu">
        <NavLink to="/" >
            Головна
        </NavLink>
        <NavLink to="/events" activeStyle={selectedStyle}>
            Події
        </NavLink>
        <NavLink to="/products" activeStyle={selectedStyle}>
            Продукти
        </NavLink>
        <NavLink to="/about" activeStyle={selectedStyle}>
            Про нас
        </NavLink>
        <NavLink to="/contact" activeStyle={selectedStyle}>
            Форма запитів
        </NavLink>
    </nav>

export default MainMenu;    
import React from 'react';
import { NavLink } from 'react-router-dom';

const selectedStyle = {
    backgroundColor: "red",
    color: "slategray"
}

const MainMenu = () =>
    <nav className="main-menu">
        <NavLink to="/">
            [Home]
        </NavLink>
        <NavLink to="/events" activeStyle={selectedStyle}>
            [Events]
        </NavLink>
        <NavLink to="/products" activeStyle={selectedStyle}>
            [Products]
        </NavLink>
        <NavLink to="/about" activeStyle={selectedStyle}>
            [About]
        </NavLink>
        <NavLink to="/contact" activeStyle={selectedStyle}>
            [Contact Us]
        </NavLink>
    </nav>

export default MainMenu;    
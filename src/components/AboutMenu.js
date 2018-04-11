import React from 'react';
import { NavLink } from 'react-router-dom';

const selectedStyle = {
    backgroundColor: "green",
    color: "slategray"
}

const AboutMenu = () =>
    <div className="about-menu">
        <li>
            <NavLink to="/about" >
                [Загальні відомості]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/history" activeStyle={selectedStyle}>
                [Історія]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/address" activeStyle={selectedStyle}>
                [Адрес]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/tranding" activeStyle={selectedStyle}>
                [Торговельні партнери]
            </NavLink>
        </li>
    </div>

export default AboutMenu;    
import React from 'react';
import { NavLink } from 'react-router-dom';
import './headerlogo.scss';
const Headerlogo = () => {
    return (
        <nav className="menu-wrapper">
            <div className="title-logo-img">
                <a href="/" className="title-logo-text">
                    <p className="logo"></p>
                    <span>Covid-19 Tracker</span>
                </a>
                <p className="humburger-menu"></p>
            </div>
            <ul className="menu-link">
                <li>
                    <NavLink to={"/india"} activeClassName="is-active">India</NavLink>
                </li>
                <li>
                    <NavLink to={"/country"} activeClassName="is-active">World</NavLink>
                </li>
                <li>
                    <NavLink to={"/charts"} activeClassName="is-active">Charts</NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default Headerlogo;
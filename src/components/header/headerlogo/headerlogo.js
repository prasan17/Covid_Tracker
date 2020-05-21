import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to={"/"}>India</Link>
                </li>
                <li>
                    <Link to={"/country"}>World</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Headerlogo;
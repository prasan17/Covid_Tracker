import React from 'react';
import Headerlogo from './headerlogo/headerlogo';
import Caurosel from './caurosel/caurosel';
const Header = (props) => {
    return (
        <header>
            <Headerlogo />
            <Caurosel />
        </header>
    );
}
export default Header;
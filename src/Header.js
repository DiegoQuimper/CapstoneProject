import React from 'react';
import Logo from './Images/Logo.png';
import Nav from './Nav';
import './Header.css';
function Header() {
    return (
        <header className='header'>
            <img src={Logo} alt='Little lemon logo' />
            <Nav />
        </header>
    );
}

export default Header;
import React from 'react';
import Menu from './Menu';
import LogoImage from '../images/logo.jpg'
import './Header.css';

const Header = () => {
    return (
        <div className='Header'>
            <img className='Logo'
                 src={LogoImage}
                 alt='Buchgeschwister'
            />
            <Menu/>
        </div>
    );
};

export default Header;
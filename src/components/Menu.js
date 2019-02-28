import React from 'react';
import './Menu.css';


const Menu = () => {
    return (
        <ul className='Menu'>
            <li><a className='MenuItem' href='/'>buchgeschwister.de</a></li>
            <li><a className='MenuItem' href='/about'>Über uns</a></li>
        </ul>
    );
};

export default Menu;
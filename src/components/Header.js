import React, {Component} from 'react';
import Menu from './Menu';
import LogoImage from '../images/book-open-outline-filled.png'
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className='Header'>
                <img className='Logo'
                     src={LogoImage}
                     alt='Buchgeschwister'
                />
                <Menu/>
            </div>
        );
    }
};
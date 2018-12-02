import React, {Component} from 'react';
import './Menu.css';

export default class Menu extends Component {

    render() {
        return (
            <ul className='Menu'>
                <li><a href='/'>buchgeschwister.de</a></li>
                <li><a href='/about'>Über uns</a></li>
                <li><a href='/impressum'>Impressum</a></li>
            </ul>
        );
    };
};
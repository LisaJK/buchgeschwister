import React, {Component} from 'react';
import './Menu.css';

export default class Menu extends Component {

    render() {
        return (
            <ul className='Menu'>
                <li><a className='MenuItem' href='/'>buchgeschwister.de</a></li>
                <li><a className='MenuItem' href='/about'>Über uns</a></li>
            </ul>
        );
    };
};
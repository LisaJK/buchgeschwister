import React, { Component } from 'react';

import './Book.css';

export default class Book extends Component {
    render() {
        return (
            <div className='Book'>
                <h2 className='title'>Titel: {this.props.title}</h2>
                <h3 className='author'>Autor: {this.props.author}</h3>
                <img src={this.props.img}/><br/>
                <span>Darum geht es: {this.props.content}</span>
            </div>
        );
    }
}
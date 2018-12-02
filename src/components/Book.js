import React, { Component } from 'react';
import Cover from './Cover';

import './Book.css';

export default class Book extends Component {
    render() {
        return (
            <div className='Book'>
                <Cover img={this.props.img}/>
                <h2 className='Title'>{this.props.title}</h2>
                <h3 className='Author'>{this.props.author}</h3>
                <h4 className='Age'>Altersempfehlung: {this.props.age}</h4>
                <p>Und darum geht es in dem Buch: </p>
                <span>{this.props.content}</span>
            </div>
        );
    }
}
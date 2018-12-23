import React, { Component } from 'react';
import './Cover.css';

export default class Cover extends Component {
    render() {
        return <div className='Cover'>
            <img src={this.getImage()} alt={this.props.title}/>
        </div>;
    }
    getImage() {
        return require('../images/' + this.props.title + '.jpg');
    }
}
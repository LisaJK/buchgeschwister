import React, { Component } from 'react';

import './Cover.css';

export default class Cover extends Component {
    render() {
        return <div className='Cover'>
            <img src={this.props.img}/>
        </div>;
    }
}
import React, {Component} from 'react';

import './MainInfo.css';
import Cover from "./Cover";

export default class MainInfo extends Component {
    render() {
        return (
            <div className='MainInfo'>
                <Cover title={this.props.title}/>
                <div className={'TitleAuthor'}>
                    <h2 className='Title'>{this.props.title}</h2>
                    <div>
                        <h3 className='Author'>{this.props.author}</h3>
                    </div>
                </div>
            </div>
        );
    }
}
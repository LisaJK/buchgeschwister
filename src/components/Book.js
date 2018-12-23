import React, {Component} from 'react';

import './Book.css';
import Additional from "./AdditionalInfo";
import MainInfo from "./MainInfo";

export default class Book extends Component {
    render() {
        return (
            <div className='Book'>
                <MainInfo img={this.props.img} title={this.props.title} author={this.props.author}/>
                <Additional
                    age={this.props.age}
                    fontSize={this.props.fontSize}
                    genre={this.props.genre}
                    illustrated={this.props.illustrated ? 'Ja' : 'Nein'}
                    plus={this.props.plus}
                    minus={this.props.minus}
                    awards={this.props.awards}
                    stars={this.props.stars}
                    price={this.props.price}
                    similarTo={this.props.similarTo}
                />
                <p className='Content'>Darum geht es in dem Buch: </p>
                <span>{this.props.content}</span>
            </div>
        );
    }
}
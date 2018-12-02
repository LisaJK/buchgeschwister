import React, {Component} from 'react';
import Book from './Book';
import HP1 from '../images/51fXQpS-p6L._SX318_BO1,204,203,200_.jpg'
import * as books from '../content/books.json';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1>Herzlich Willkommen!</h1>
                <p>Weißt du nicht, was du als nächstes lesen sollst?
                Suchen Sie ein Geschenk für Ihr Kind oder Enkelkind?</p>
                <p>Wir lieben lesen und hier sind unsere Empfehlungen:</p>
                <Book title={books.title}
                      author={books.author}
                      content={books.content}
                      img={HP1}
                      age={books.age}
                      />
            </div>
        );
    }
}
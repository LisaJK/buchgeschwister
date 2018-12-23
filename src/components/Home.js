import React, {Component} from 'react';
import Book from './Book';
import allBooks from '../content/books.json';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1>Herzlich Willkommen!</h1>
                <p>Weißt du nicht, was du als nächstes lesen sollst?
                    Suchen Sie ein Geschenk für Ihr Kind oder Enkelkind?</p>
                <p>Wir lieben lesen und hier sind unsere Empfehlungen:</p>
                {allBooks.books.map(book => {
                    return (<Book className="book"
                          key={book.title}
                          title={book.title}
                          author={book.author}
                          age={book.age}
                          fontSize={book.fontSize}
                          parts={book.parts}
                          genre={book.genre}
                          illustrated={book.illustrated}
                          plus={book.plus}
                          minus={book.minus}
                          awards={book.awards}
                          stars={book.stars}
                          price={book.price}
                          similarTo={book.similarTo}
                          content={book.content}/>);
                }
                )}
            </div>
        );
    }
}
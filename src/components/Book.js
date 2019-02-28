import React from 'react';

import './Book.css';
import Additional from "./AdditionalInfo";
import MainInfo from "./MainInfo";
import PropTypes from "prop-types";

const Book = (props) => {
    return (
        <div className='Book'>
            <MainInfo title={props.title} author={props.author}/>
            <Additional
                age={props.age}
                fontSize={props.fontSize}
                genre={props.genre}
                illustrated={props.illustrated ? 'Ja' : 'Nein'}
                plus={props.plus}
                minus={props.minus}
                awards={props.awards}
                stars={props.stars}
                price={props.price}
                similarTo={props.similarTo}
            />
            <p className='Content'>Darum geht es in dem Buch: </p>
            <span>{props.content}</span>
        </div>
    );
};

Book.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    plus: PropTypes.string.isRequired,
    minus: PropTypes.string.isRequired,
    awards: PropTypes.string.isRequired,
    stars: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    similarTo: PropTypes.string.isRequired,
};

export default Book;
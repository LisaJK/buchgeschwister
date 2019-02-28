import React from 'react';

import './Book.css';
import Additional from "./AdditionalInfo";
import MainInfo from "./MainInfo";

const Book = (props) => {
    return (
        <div className='Book'>
            <MainInfo img={props.img} title={props.title} author={props.author}/>
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

export default Book;
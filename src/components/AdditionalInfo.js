import React from 'react';

import './AdditionalInfo.css';

const AdditionalInfo = (props) => {
    return (
        <div className='AdditionalInfo'>
            <table className='AdditionalTable'>
                <tbody>
                <tr className='Age Additional'>
                    <th>Altersempfehlung:</th>
                    <td>{props.age}</td>
                </tr>
                <tr className='FontSize Additional'>
                    <th>Schriftgröße:</th>
                    <td>{props.fontSize}</td>
                </tr>
                <tr className='Genre Additional'>
                    <th>Genre:</th>
                    <td>{props.genre}</td>
                </tr>
                <tr className='Illustrated Additional'>
                    <th>Illustriert:</th>
                    <td>{props.illustrated}</td>
                </tr>
                <tr className='Plus Additional'>
                    <th>Das ist gut:</th>
                    <td>{props.plus}</td>
                </tr>
                <tr className='Minus Additional'>
                    <th>Das ist nicht so gut:</th>
                    <td>{props.minus}</td>
                </tr>
                <tr className='Awards Additional'>
                    <th>Preise:</th>
                    <td>{props.awards}</td>
                </tr>
                <tr className='Price Additional'>
                    <th>Preis:</th>
                    <td>{props.price} €</td>
                </tr>
                <tr className='Review Additional'>
                    <th>Bewertung:</th>
                    <td>
                        {renderStars(props.stars)}
                    </td>
                </tr>
                <tr className='SimilarTo Additional'>
                    <th>Das könnte dir auch gefallen:</th>
                    <td>{props.similarTo}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};
const renderStars = (numberOfStars) => {
    const fullStars = Number(numberOfStars.substr(0, 1));

    const stars = [...Array(fullStars)].map((x, i) =>
        <i className='fa fa-star Stars' key={i}/>
    );

    if (numberOfStars.endsWith("+")) {
        stars.push(<i className='fa fa-star-half-empty Stars' key={fullStars + 1}/>);
    }

    if (stars.length < 5) {
        stars.push([...Array(5 - stars.length)].map((x, i) =>
            <i className='fa fa-star-o Stars' key={stars.length + i}/>
        ));
    }

    return stars;
};

export default AdditionalInfo;
import React, {Component} from 'react';

import './AdditionalInfo.css';

export default class AdditionalInfo extends Component {
    render() {
        return (
            <div className='AdditionalInfo'>
                <table className='AdditionalTable'>
                    <tbody>
                    <tr className='Age Additional'>
                        <th>Altersempfehlung:</th>
                        <td>{this.props.age}</td>
                    </tr>
                    <tr className='FontSize Additional'>
                        <th>Schriftgröße:</th>
                        <td>{this.props.fontSize}</td>
                    </tr>
                    <tr className='Genre Additional'>
                        <th>Genre:</th>
                        <td>{this.props.genre}</td>
                    </tr>
                    <tr className='Illustrated Additional'>
                        <th>Illustriert:</th>
                        <td>{this.props.illustrated}</td>
                    </tr>
                    <tr className='Plus Additional'>
                        <th>Das ist gut:</th>
                        <td>{this.props.plus}</td>
                    </tr>
                    <tr className='Minus Additional'>
                        <th>Das ist nicht so gut:</th>
                        <td>{this.props.minus}</td>
                    </tr>
                    <tr className='Awards Additional'>
                        <th>Preise:</th>
                        <td>{this.props.awards}</td>
                    </tr>
                    <tr className='Price Additional'>
                        <th>Preis:</th>
                        <td>{this.props.price} €</td>
                    </tr>
                    <tr className='Review Additional'>
                        <th>Bewertung:</th>
                        <td>
                            {this.renderStars()}
                        </td>
                    </tr>
                    <tr className='SimilarTo Additional'>
                        <th>Das könnte dir auch gefallen:</th>
                        <td>{this.props.similarTo}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    renderStars() {
        const fullStars = Number(this.props.stars.substr(0, 1));

        const stars = [...Array(fullStars)].map((x, i) =>
            <i className='fa fa-star Stars' key={i}/>
        );

        if (this.props.stars.endsWith("+")) {
            stars.push(<i className='fa fa-star-half-empty Stars' key={fullStars + 1}/>);
        }

        if (stars.length < 5) {
            stars.push([...Array(5 - stars.length)].map((x, i) =>
                <i className='fa fa-star-o Stars' key={stars.length + i}/>
            ));
        }

        return stars;
    }
}
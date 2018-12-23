import React, {Component} from 'react';
import star from '../images/start_53876-25533.jpg'

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
                        <th>Vorteile:</th>
                        <td>{this.props.plus}</td>
                    </tr>
                    <tr className='Minus Additional'>
                        <th>Nachteile:</th>
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
                    <tr className='Stars Additional'>
                        <th>Bewertung:</th>
                        <td>
                            {[...Array(this.props.stars)].map((x, i) =>
                                <img className='Stars' src={star} alt={this.props.alt} key={i}/>
                            )}
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
}
import React, { Component } from 'react';

class Book extends Component {
    render() {
        return (
            <div className="Book">
                <h2>{this.props.title}</h2>
                <img height="200px" src={this.props.img}/><br/>
                {this.props.content}
            </div>
        );
    }
}

export default Book;
import React from 'react';
import './Cover.css';

const Cover = (props) => {
    return <div className='Cover'>
        <img src={getImage(props.title)} alt={props.title}/>
    </div>;
};

const getImage = (title) => {
    return require('../images/' + title + '.jpg');
};

export default Cover;
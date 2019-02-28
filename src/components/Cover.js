import React from 'react';
import PropTypes from 'prop-types';
import './Cover.css';

const Cover = (props) => {
    return <div className='Cover'>
        <img src={getImage(props.title)} alt={props.title}/>
    </div>;
};

const getImage = (title) => {
    return require('../images/' + title + '.jpg');
};

Cover.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Cover;
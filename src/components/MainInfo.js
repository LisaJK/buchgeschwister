import React from 'react';

import './MainInfo.css';
import Cover from "./Cover";

const MainInfo = (props) => {
    return (
        <div className='MainInfo'>
            <Cover title={props.title}/>
            <div className={'TitleAuthor'}>
                <h2 className='Title'>{props.title}</h2>
                <div>
                    <h3 className='Author'>{props.author}</h3>
                </div>
            </div>
        </div>
    );
};

export default MainInfo;
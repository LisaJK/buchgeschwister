import React from 'react';
import emma from "../images/emma.jpg";
import paula from "../images/paula.JPG";

import './About.css';

const About = () => {
    return (
        <div className="About">
            <h1>Hallo, schön, dass Ihr da seid!</h1>
            <h2>Wir sind Emma und Paula, sind zehn und acht Jahre alt und wir LIEBEN Bücher!</h2>
            <p>Deswegen haben wir uns überlegt, Büchertipps zu schreiben. Egal, ob Sie Ihrem Kind, Ihrem Enkel oder
                sich selbst ein Kinderbuch schenken wollen: wir haben Tipps für jedes Kind.</p>
            <p>Unsere Lieblingsbuchreihe ist Harry Potter.</p>
            <div className='Images'>
                <img className='Image' src={emma} alt={'Emma liest'}/>
                <img className='Image' src={paula} alt={'Paula liest'}/>
            </div>
            <a className='Impressum' href='/impressum'>Impressum</a>
        </div>
    );
};

export default About;
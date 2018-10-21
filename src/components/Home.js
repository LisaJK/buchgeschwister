import React, {Component} from 'react';
import Book from './Book';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1>Willkommen auf buchgeschwister.de!</h1>
                <Book title={"Harry Potter und der Stein der Weisen"}
                      content={"Darum geht es:"}
                      img={'https://vignette.wikia.nocookie.net/harrypotter/images/c/c8/Limitierte-Taschenbuchausgabe-Harry-Potter-und-der-Stein-der-Weisen_19_E10134_40.jpg/revision/latest?cb=20161031190502'}/>
            </div>
        );
    }
}

export default Home;
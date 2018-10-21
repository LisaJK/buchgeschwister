import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Impressum from './components/Impressum';


import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <ul>
                            <Link to="/">buchgeschwister.de</Link>
                        </ul>
                        <ul>
                            <Link to="/about">Über uns</Link>
                        </ul>
                        <ul>
                            <Link to="/impressum">Impressum</Link>
                        </ul>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/impressum" component={Impressum}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;

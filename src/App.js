import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Impressum from './components/Impressum';


import './App.css';


const App = () => {
    return (<div className="App">
        <Router>
            <div>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/impressum" component={Impressum}/>
            </div>
        </Router>
    </div>);
};

export default App;

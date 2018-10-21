import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import {Link} from "react-router-dom";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('should have Home Link', function () {
    const app = shallow(<App/>);
    expect(app.contains(<Link to="/">Home</Link>)).toEqual(true);
});

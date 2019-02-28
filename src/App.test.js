import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';

describe("should render app", () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should have Home Link', function () {
        const app = shallow(<App/>);
        expect(app.find('Route').first().props().path).toEqual('/');
    });
});

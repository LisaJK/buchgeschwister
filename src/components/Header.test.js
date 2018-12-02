import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

describe("should render a header", () => {

    it('should have a logo', function () {
        const header = shallow(<Header/>);
        expect(header.find('.Logo').exists()).toBe(true);
    });

     it('should have nav bar', function () {
         const header = shallow(<Header/>);
         expect(header.find('Menu').exists()).toBe(true);
      });
});
import React from 'react';
import {shallow} from 'enzyme';
import Book from './Book';

describe("should render a book", () => {

    it('should have title', function () {
        const book = shallow(<Book title={'the_title'}/>);
        expect(book.find('MainInfo').props().title).toEqual('the_title');
    });

    it('should have author', function () {
        const book = shallow(<Book author={'the_author'}/>);
        expect(book.find('MainInfo').props().author).toEqual('the_author');
    });

    it('should have img', function () {
        const book = shallow(<Book img={'the_src'}/>);
        expect(book.find('MainInfo').props().img).toEqual('the_src');
    });

    it('should have content', function () {
        const book = shallow(<Book content={'the_content'}/>);
        expect(book.find('span').text()).toEqual('the_content');
    });

    it('should have age', function () {
        const book = shallow(<Book age={'12'}/>);
        expect(book.find('AdditionalInfo').props().age).toEqual('12');
    });
});
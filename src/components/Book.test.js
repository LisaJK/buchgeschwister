import React from 'react';
import {shallow} from 'enzyme';
import Book from './Book';
import PropTypes from "prop-types";

describe("should render a book", () => {

    const book = shallow(<Book
                    title={'the_title'}
                    author={'the_author'}
                    age={'12'}
                    fontSize={'8'}
                    content={'the_content'}
                    genre={'genre'}
                    plus={'the_plus'}
                    minus={'the_minus'}
                    awards={'the_awards'}
                    stars={'5'}
                    price={12.50}
                    similarTo={'the_similar'}
    />);

    it('should have title', function () {
        expect(book.find('MainInfo').props().title).toEqual('the_title');
    });

    it('should have author', function () {
        expect(book.find('MainInfo').props().author).toEqual('the_author');
    });

    it('should have content', function () {
        expect(book.find('span').text()).toEqual('the_content');
    });

    it('should have age', function () {
        expect(book.find('AdditionalInfo').props().age).toEqual('12');
    });
});
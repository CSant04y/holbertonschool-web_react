import { shallow } from 'enzyme';
import App from './App';
import React from 'react';

describe("<App>", () => {
    it("Making sure App loads", () => {
        shallow(<App />)
    })

    it("tests header which renders as App-header", () => {
        const myElem = shallow(<App />);
        expect(myElem.find('div').first().hasClass('App-header'));
    });

    it("tests header which renders as App-body", () => {
        const myElem = shallow(<App />);
        expect(myElem.find('div').first().hasClass('App-body'));
    });

    it("tests header which renders as App-footerr", () => {
        const myElem = shallow(<App />);
        expect(myElem.find('div').first().hasClass('App-footer'));
    });
})

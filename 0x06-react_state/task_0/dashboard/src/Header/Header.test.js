import Header from './Header.js'
import { shallow } from 'enzyme';
import React from 'react';
import '../../config/setupTests';
import { expect } from 'chai';
import { StyleSheetTestUtils } from 'aphrodite';

describe("Testing the <Header /> componet", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header />);
        StyleSheetTestUtils.suppressStyleInjection();
    })
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it("Header componet loads", () => {
        expect(wrapper.render()).to.not.be.an("undefined")
    });

    it("Header componet has img", () => {
        expect(wrapper.find("img")).to.have.lengthOf(1);
    });

    it("Header componet has h1", () => {
        expect(wrapper.find("h1")).to.have.lengthOf(1);
    });
});
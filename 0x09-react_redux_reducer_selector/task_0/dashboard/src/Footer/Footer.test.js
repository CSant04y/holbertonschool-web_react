import Footer from './Footer.js'
import { shallow, mount } from 'enzyme';
import React from 'react';
import "../../config/setupTests"
import { expect } from 'chai';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext from '../App/AppContext.js';


describe("Testing the <Footer /> componet", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Footer />);
        StyleSheetTestUtils.suppressStyleInjection();
    })
    
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it("Footer componet loads", () => {
        expect(wrapper.exists()).to.not.be.an("undefined")
    });
});

describe("<Footer />", () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    })
    
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it("testing loggedIn not displaying Contact us", () => {
        const dummy = {
            user: {
                email: "willy@gmail.com",
                password: "freewilly",
                isLoggedIn: false
            },
            logOut: () => {}
        }

        const wrapper = mount(
            <AppContext.Provider value={dummy}>
                <Footer />
            </AppContext.Provider>
        )
        expect(wrapper.find('a')).to.have.length(0);
    })

    it("testing loggedIn displaying Contact us", () => {
        const dummy = {
            user: {
                email: "willy@gmail.com",
                password: "freewilly",
                isLoggedIn: true
            },
            logOut: () => {}
        }

        const wrapper = mount(
            <AppContext.Provider value={dummy}>
                <Footer />
            </AppContext.Provider>
        )
        expect(wrapper.find('a')).to.have.length(1);
    })
})
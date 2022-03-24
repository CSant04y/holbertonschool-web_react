import Header from './Header.js'
import { shallow, mount } from 'enzyme';
import React from 'react';
import '../../config/setupTests';
// import { expect } from 'chai';
import { StyleSheetTestUtils } from 'aphrodite';
import AppContext, { user, logOut } from '../App/AppContext.js';

describe("Testing the <Header /> componet", () => {
    let wrapper;
    const dummy = {
        user: {
            email: "willy@gmail.com",
            password: "freewilly",
            isLoggedIn: true
        },
        logOut: () => {}
    }
    beforeEach(() => {
        wrapper = mount(
            <AppContext.Provider value={{user: dummy.user, logOut: dummy.user.logOut}}>
                <Header />
            </AppContext.Provider>
        );
        StyleSheetTestUtils.suppressStyleInjection();
    })
    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it("Header componet loads", () => {
        expect(wrapper.exists()).toEqual(true);
    });

    it("Header componet has img", () => {
        expect(wrapper.find("img").exists()).toEqual(true);
    });

    it("Header componet has h1", () => {
        expect(wrapper.find("h1").exists()).toEqual(true)
    });
});

describe("Testsing <header />", () => {

    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    })

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it("Testing that Logout section is not renderd", () => {
        const dummy = {
            user: {
                email: "willy@gmail.com",
                password: "freewilly",
                isLoggedIn: false
            },
            logOut: () => {}
        }

        const wrapper = mount(
            <AppContext.Provider value={{user: dummy.user, logOut: dummy.user.logOut}}>
                <Header />
            </AppContext.Provider>
        );
        
        expect(wrapper.find("#logoutSection").exists()).toEqual(false);
    });

    it("Testing that Logout section is rendered", () => {
        const dummy = {
            user: {
                email: "willy@gmail.com",
                password: "freewilly",
                isLoggedIn: true
            },
            logOut: () => {}
        }

        const wrapper = mount(
            <AppContext.Provider value={{user: dummy.user, logOut: dummy.user.logOut}}>
                <Header />
            </AppContext.Provider>
        );
        
        expect(wrapper.find("#logoutSection").exists()).toEqual(true);
    })

    it("Testing logOut with spy to ensure it works", () => {
        const logOutSpy = jest.fn();
        const dummy = {
            user: {
                email: "willy@gmail.com",
                password: "freewilly",
                isLoggedIn: true
            },
            logOut: () => {},
        }

        const wrapper = mount(
            <AppContext.Provider value={{user: dummy.user, logOut: logOutSpy}}>
                <Header />
            </AppContext.Provider>
        );
        
        wrapper.find('a').simulate("click");
        expect(logOutSpy).toHaveBeenCalled()
        jest.restoreAllMocks();
    });
});
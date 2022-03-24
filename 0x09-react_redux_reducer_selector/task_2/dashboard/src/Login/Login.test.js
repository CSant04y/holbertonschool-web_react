import Login from './Login.js'
import { shallow } from 'enzyme';
import React from 'react';
import "../../config/setupTests"
import { expect } from 'chai';
import { StyleSheetTestUtils } from 'aphrodite';


describe("Testing the <Login /> componet", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Login />);
        StyleSheetTestUtils.suppressStyleInjection();
    })

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });
    it("Login componet loads", () => {
        expect(wrapper.render()).to.not.be.an("undefined")
    });

    it("Login componet has img", () => {
        expect(wrapper.find("input")).to.have.lengthOf(3);
    });

    it("Login componet has h1", () => {
        expect(wrapper.find("label")).to.have.lengthOf(2);
    });
});

describe("<Login /> is tested for input values", () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
    })

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it("Testing that submit button is disabled by default", () => {
        let props = {
            isLoggedIn: false,
            email: "",
            password: "",
            enableSubmit: false,
        }
        let wrapper = shallow(<Login {...props} />);
        expect(wrapper.find('input').at(2).prop('disabled')).to.equal(true);
    })

    it("Tests to see that changing the value of the two inputs, the button is enabled", () => {
        const wrapper = shallow(<Login />);
        const email = wrapper.find("#email");
        const password = wrapper.find("#password");
    
        email.simulate("change", {
          target: { name: "email", value: "BobDylan@email.com" },
        });
    
        let submit = wrapper.find("[type='submit']");
    
        expect(submit.prop("disabled")).to.equal(true);
    
        password.simulate("change", {
          target: { name: "password", value: "123456" },
        });
    
        submit = wrapper.find("[type='submit']");
        expect(submit.prop("disabled")).to.equal(false);
    })
});

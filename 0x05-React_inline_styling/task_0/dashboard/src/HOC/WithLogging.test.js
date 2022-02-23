import { shallow, mount } from 'enzyme';
import React from 'react';
import "../../config/setupTests";
import WithLogging from './WithLogging.js';
import Login from '../Login/Login.js';


describe("This Test HOC WithLogging", () => {
    it("Tests that Console.log was called", () => {
        console.log = jest.fn();

        const HOC = WithLogging(() => <p />)
        const wrapper = mount(<HOC />);
        expect(wrapper.exists()).toEqual(true);

        expect(console.log).toHaveBeenNthCalledWith(1, 'Component Componet is mounted');

        wrapper.unmount()

        expect(wrapper.exists()).toEqual(false);

        expect(console.log).toHaveBeenNthCalledWith(2, 'Component Componet is going to unmount')
        jest.restoreAllMocks();
    })

    it("Tests that console.log was called on mount and on unmount", () => {
        console.log = jest.fn();

        const HOC = WithLogging(Login);
        const wrapper = mount(<HOC />);
        expect(wrapper.exists()).toEqual(true);

        expect(console.log).toHaveBeenNthCalledWith(1, 'Component Login is mounted');

        wrapper.unmount()

        expect(wrapper.exists()).toEqual(false);

        expect(console.log).toHaveBeenNthCalledWith(2, 'Component Login is going to unmount')
        jest.restoreAllMocks();
    })
})

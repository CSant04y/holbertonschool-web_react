import { shallow } from 'enzyme';
import Notifications from "./Notifications";
import React from 'react';

describe("Testing the <Notifications /> componet", () => {
    it("test Notifications Render", () => {
        shallow(<Notifications />)
    });

    it("Tests to see 3 li items rendered", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('li')).toHaveLength(3)
    });

    it("Tests the <Notification /> p tag", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(true);
    });
})

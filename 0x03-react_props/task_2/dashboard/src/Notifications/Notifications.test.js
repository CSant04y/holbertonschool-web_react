import { shallow } from 'enzyme';
import Notifications from "./Notifications";
import React from 'react';
import "../../config/setupTests"
import NotificationItem from './NotificationItem';

describe("Testing the <Notifications /> componet", () => {
    it("test Notifications Render", () => {
        shallow(<Notifications />)
    });

    it("Tests to see if <NotificationItem /> renders to DOM", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find(NotificationItem)).toHaveLength(3);
    });

    it("Tests to see if <NotificationItem /> has correct html", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('ul').childAt(0).html()).toEqual('<li data-notification-type="default" class="default">New course available</li>');
    });

    it("Tests the <Notification /> p tag", () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.contains(<p>Here is the list of notifications</p>)).toEqual(true);
    });
})

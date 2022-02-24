import { shallow } from 'enzyme';
import NotificationItem from "./NotificationItem.js";
import React from 'react';
import "../../config/setupTests"
import { StyleSheetTestUtils } from 'aphrodite';

describe("Testing the <NotificationItem /> componet renders", () => {

    it("Tests to see <Li componet was rendered", () => {
        const wrapper = shallow(<NotificationItem displayDrawer />);
        expect(wrapper.exists()).toEqual(true)
    });

    it("Tests to see if props are passed along and rendered", () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.props()['data-notification-type']).toEqual('default');
        expect(wrapper.props()['children']).toEqual('test');
    });
})

describe("<NotificationItem />", () => {
    it("simulating a click on the component, the spy is called with the right ID argument", () => {
        const props = {
            type: "urgent",
			html: { __html: "<p>test</p>"},
			markAsRead: (id) => { console.log(`Notification ${id} has been marked as read`)}
        };
        const wrapper = shallow(<NotificationItem {...props} />);
        console.log = jest.fn();
        wrapper.find('li').simulate('click');
        expect(console.log.mock.calls.length).toEqual(1);
        
    })
});

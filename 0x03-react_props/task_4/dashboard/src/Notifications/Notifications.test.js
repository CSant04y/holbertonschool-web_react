import { shallow } from 'enzyme';
import Notifications from "./Notifications";
import React from 'react';
import "../../config/setupTests"
import NotificationItem from './NotificationItem';
import { expect } from 'chai';
 
describe("Testing the <Notifications /> componet", () => {
    it("test Notifications Render", () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.render()).to.not.be.an("undefined");
    });

    it("Tests to see if <Notifications />  has three componets", () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find(NotificationItem)).to.have.lengthOf(3);
    });

    it("Tests to see if <Notifications /> has correct html", () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.find('ul')
        .childAt(0).html())
        .to
        .equal('<li data-notification-type="default" class="default">New course available</li>');
    });

    it("Tests the <Notifications /> p tag", () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
        expect(wrapper.contains(<p>Here is the list of notifications</p>)).to.equal(true);
    });

    it("Tests the that menuItem is displayed when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications displayDrawer={false}/>);
        expect(wrapper.find("div.menuItem").exists()).to.equal(true);
    });

    it("Tests that div.Notifications is not displayed when displayDrawer is false", () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find("div.Notifications").exists()).to.equal(false);
    })

    it("Tests menuItem is displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />); 
        expect(wrapper.find("div.menuItem").exists()).to.equal(true);
    });

    it("Tests that div.Notifications is being displayed when displayDrawer is true", () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find("div.Notifications").exists()).to.equal(true);
    })
})

import { shallow } from 'enzyme';
import App from './App';
import React from 'react';
import "../../config/setupTests";
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import { expect } from 'chai';

describe("<App>", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
	});

	it("<App /> is rendered without crashing", () => {
		expect(wrapper).to.not.be.an('undefined');
	});

    it("<App /> is rendering <Header /> componet", () => {
        expect(wrapper.contains(<Header />)).to.equal(true);
    });

    it("<App /> is rendering <Notification /> componet", () => {
        expect(wrapper.contains(<Notifications />)).to.equal(true);
    });

    it("<App /> is rendering <Login /> componet", () => {
        expect(wrapper.contains(<Login />)).to.equal(true);
    });

    it("<App /> is rendering <Footer /> componet", () => {
        expect(wrapper.contains(<Footer />)).to.equal(true);
    });
})

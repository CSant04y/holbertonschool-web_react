/**
 * @jest-environment jsdom
 */
import { shallow, mount } from 'enzyme';
import App from './App';
import React from 'react';
import "../../config/setupTests";
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';


describe("<App>", () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App />);
        StyleSheetTestUtils.suppressStyleInjection();
	});

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

	it("<App /> is rendered without crashing", () => {
		expect(wrapper.exists()).toBe(true);
	});

    it("<App /> is rendering <Header /> componet", () => {
        expect(wrapper.contains(<Header />)).toEqual(true);
    });

    it("<App /> is rendering <Notification /> componet", () => {
        expect(wrapper.contains(<Notifications displayDrawer={true}/>)).toEqual(false);
    });

    it("<App /> is rendering <Login /> componet", () => {
        expect(wrapper.contains(<Login />)).toEqual(true);
    });

    // it("<App /> is rendering <Footer /> componet", () => {
    //     expect(wrapper.contains(<Footer />)).toEqual(true);
    // });

    it("<App /> is not rending <CourseList /> componet", () => {
        expect(wrapper.exists(CourseList)).toEqual(false);
    });

})

describe("<App />", () => {
    let wrapper;

	beforeEach(() => {
		wrapper = shallow(<App isLoggedIn={true}/>);
        StyleSheetTestUtils.suppressStyleInjection();
	});

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it("Tests App when is logged in to see logged in componet", () => {
        expect(wrapper.exists(Login)).toEqual(false);
    });

    it("Tests App when logged in to see that CourseList exists", () => {
        expect(wrapper.exists(CourseList)).toEqual(true);
    })
})

describe("<App /> ", () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
	});

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it("Mocks Alert('Logging you out') when pressing Ctrl + h", () => {
        let events = {};
        const myLogOut = jest.fn(() => undefined);

        document.addEventListener = jest.fn((event, cb) => {
            events[event] = cb;
        });
        window.alert = jest.fn();
        shallow(<App logOut={myLogOut} />);

        events.keydown({ key: "h", ctrlKey: true })
        expect(myLogOut).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Logging you out");
    
        jest.restoreAllMocks();    
        
    })
})

describe("<App /> testing state", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<App />)
        StyleSheetTestUtils.suppressStyleInjection();
	});

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it("Tests that Initial value if state is false and true", () => {
        expect(wrapper.state('displayDrawer')).toEqual(false);
        wrapper.instance().handleDisplayDrawer();
        expect(wrapper.state('displayDrawer')).toEqual(true);
    })

    it("Tests that calling hideDrawer will rupdate state to false", () => {
        expect(wrapper.state('displayDrawer')).toEqual(false);
        wrapper.instance().handleDisplayDrawer();
        expect(wrapper.state('displayDrawer')).toEqual(true);
        wrapper.instance().handleHideDrawer();
        expect(wrapper.state('displayDrawer')).toEqual(false);

    })
});
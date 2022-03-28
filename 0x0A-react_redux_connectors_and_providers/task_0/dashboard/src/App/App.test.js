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
import AppContext from './AppContext.js'
import { mapStateToProps } from './App.js'
import { fromJS } from 'immutable'


describe("<App>", () => {

	beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
	});

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

	it("<App /> is rendered without crashing", () => {
        const wrapper = shallow(<App />);
		expect(wrapper.exists()).toBe(true);
	});

    it("<App /> is rendering <Header /> componet", () => {
        const wrapper = mount(<App />);
        expect(wrapper.contains(<Header />)).toEqual(true);
    });

    it("<App /> is rendering <Notification /> componet", () => {
        const wrapper = mount(<App />);
        expect(wrapper.contains(<Notifications displayDrawer={true}/>)).toEqual(false);
    });

    it("<App /> is rendering <Login /> componet", () => {
        const wrapper = mount(<App />);
        wrapper.update();
        expect(wrapper.find("Login")).toHaveLength(1);
    });

    // it("<App /> is rendering <Footer /> componet", () => {
    //     expect(wrapper.contains(<Footer />)).toEqual(true);
    // });

    it("<App /> is not rending <CourseList /> componet", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find("CourseList")).toHaveLength(0);
    });

})

describe("<App />", () => {
    let wrapper;

	beforeEach(() => {
		wrapper = mount(<App isLoggedIn={true}/>);
        StyleSheetTestUtils.suppressStyleInjection();
	});

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it("Tests App when is logged in to see logged in componet", () => {
        wrapper.setState({
            user: {
                email: '',
                password: '',
                isLoggedIn: true,
            },
        });
        expect(wrapper.find("Login").exists()).toEqual(false);
    });

    it("Tests App when logged in to see that CourseList exists", () => {
        wrapper.setState({
            user: {
                email: '',
                password: '',
                isLoggedIn: true,
            },
        });
        expect(wrapper.find("CourseList").exists()).toEqual(true);
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
        const wrapper = shallow(<App />);

        events.keydown({ key: "h", ctrlKey: true })
        // expect(myLogOut).toHaveBeenCalled();
        expect(window.alert).toHaveBeenCalledWith("Logging you out");
        expect(wrapper.state().user.email).toBe("");
        expect(wrapper.state().user.password).toBe("")
        expect(wrapper.state().user.isLoggedIn).toBe(false)
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

describe("<App />", () => {
    beforeEach(() => {
        StyleSheetTestUtils.suppressStyleInjection();
	});

    afterEach(() => {
        StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
    });

    it("tests logout function works", () => {
        const wrapper = mount(<App />);

        wrapper.setState({
            user: {
                email: 'dadmail@hotmail',
                password: 'unsecure',
                isLoggedIn: true,
            },
            logOut: () => {},
        })

        wrapper.instance().logOut();
        expect(wrapper.state().user.isLoggedIn).toEqual(false);
        expect(wrapper.state().user.email).toEqual("");
        expect(wrapper.state().user.password).toEqual("");
    })

    it("markNotificationAsRead works as intended", () => {
		let stateObj = {
			displayDrawer: false,
            user: {
              email: '',
              password: '',
              isLoggedIn: false,
            },
            logOut: () => this.logOut(),
            listNotifications: [
              {
                id: 0,
                type: "default",
                value: "New course available",
              },
              {
                id: 1,
                type: "urgent",
                value: "New resume available",
              },
              {
                id: 2,
                type: "urgent",
                value: "dumb text",
              }
            ],
		};

		const wrapper = mount(
			<AppContext.Provider>
				<App />
			</AppContext.Provider>
		);

		wrapper.setState({...stateObj});

		wrapper.instance().markNotificationAsRead(0);
		expect(wrapper.state().listNotifications).toHaveLength(2);

	});
})

describe("Testing mapStateToProps", () => {
    it("Testing that mapStateToProps returns correct obj", () => {
        let state = fromJS({
            isUserLoggedIn: true
          });
          const result = mapStateToProps(state);

          expect(result).toEqual({ isLoggedIn: true });

    })
})
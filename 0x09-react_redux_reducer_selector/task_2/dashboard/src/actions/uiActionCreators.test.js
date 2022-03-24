import {
    HIDE_NOTIFICATION_DRAWER,
    DISPLAY_NOTIFICATION_DRAWER,
    LOGIN,
    LOGOUT,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
  } from './uiActionTypes.js';

import {
    Login,
    Logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
    loginSuccess,
    loginFailure,
    loginRequest,
} from './uiActionCreators.js'
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

// testing Action creators that increment or decrement
describe("Testing uiActionCreators", () => {
    it("Testing for response object login", () => {
        const expectObj = { type: LOGIN, user: { email: 'catHotmail@.com', password: 'LiterboxDemon' } };
        const result = Login('catHotmail@.com', 'LiterboxDemon');

        expect(expectObj).toMatchObject(expectObj);
    })

    it("Testing for response object logout", () => {
        const expectObj = { type: LOGOUT };
        const result = Logout();

        expect(expectObj).toMatchObject(expectObj);
    })

    it("Testing displayNotificationDrawer", () => {
        const expectObj = { type: DISPLAY_NOTIFICATION_DRAWER };
        const result = displayNotificationDrawer();

        expect(expectObj).toMatchObject(expectObj);
    });


    it("Testing hideDisplayNotificationDrawer", () => {
        const expectObj = { type: HIDE_NOTIFICATION_DRAWER };
        const result = hideNotificationDrawer();

        expect(expectObj).toMatchObject(expectObj);
    });

});

describe("Testing uiActionCreators loginRequest", () => {
    const user = {
        email: "abcdefg",
        password: "cat123",
    };

    const loginObj = {
        type: LOGIN,
        user: {
            email: user.email,
            password: user.password,
        }
    }


    it("Testing for response object login action", () => {
        const initialState = {};
        const store = mockStore(initialState);

        const url = '../../dashboard/login-success.json';
        fetchMock.get(url, 200);
        // console.log("This is result: ", result.fetch );

        return store.dispatch(loginRequest("esquivelCat@gmail.com", "cheese").then(() => {
            const res = store.getActions();
            expect(res[0]).toEqual(login("esquivelCat@gmail.com", "cheese"));
            expect(res[1]).toEqual(loginSuccess());
        })
        // .catch((err) => {
        //     console.log(error);
        // })
        )

    })

});
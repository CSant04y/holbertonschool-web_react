import {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications,
} from './notificationSelector.js';
import { markAsAread } from '../actions/notificationActionCreators.js';

import { stateObj, notificationReducer } from '../reducers/notificationReducer.js';
import { fetchNotificationsSuccess } from '../actions/notificationActionCreators.js';
import Immutable, {toJS, Map } from 'immutable';

describe("Testing Notificication Selector", () => {
    let newState = new Map(stateObj);

    it("Testing filterTypeSelected to have DEFAULT", () => {
        const action = fetchNotificationsSuccess();
        const ns = notificationReducer(undefined, action);
        const result = filterTypeSelected(ns);

        expect(ns.toJS().filter).toEqual(result);
    })

    // test that getNotifications returns a list of the message entities within the reduce

    it("Testing that getNotifications", () => {
        const action = fetchNotificationsSuccess();
        const ns = notificationReducer(undefined, action);
        const result = getNotifications(ns);

        expect(ns.toJS().entities.notifications).toEqual(result);
    })

    it("Testing that getUnreadNotifications", () => {
        const notifications = [
        {
            id: 1,
            isRead: false,
            type: "default",
            value: "New course available",
          },
          {
            id: 2,
            isRead: false,
            type: "urgent",
            value: "New resume available"
          },
          {
            id: 3,
            isRead: false,
            type: "urgent",
            value: "New data available"
          }
        ]

        const fake_state = Map({
            filter: "DEFAULT",
            notifications: [...notifications],
        })

        console.log(newState)
        newState = notificationReducer(fake_state, markAsAread(1));
        console.log(newState.toJS());
        const MapObj = getUnreadNotifications(newState);
        console.log(MapObj.toJS());
        expect(newState.toJS()).toEqual()
    })
})
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
  FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/notificationActionTypes.js';
import { notificationReducer, stateObj } from './notificationReducer.js';
import {
markAsAread,
setNotificationFilter,
fetchNotificationsSuccess
} from '../actions/notificationActionCreators.js';
import {notificationsNormalizer} from '../schema/notifications.js'
import immutable , {Map, is } from 'immutable';

describe('Testing State of uiReducer', () => {

let newState;
it('verifies that state is changed FETCH_NOTIFICATIONS_SUCCESS', () => {
  let notifs = {
    notifications: [],
    filter: "DEFAULT",
};
  const action = fetchNotificationsSuccess();
  const expectObj = notificationReducer(undefined, action);

  action.data.map((notif) => {
    notifs.notifications.push({ ...notif, isRead: false });
  })
  notifs = notificationsNormalizer(Map(notifs));

  expect(is(expectObj, Map(notifs))).toEqual(false);

});

it('Vertifies the mark as Read function chnages state', () => {
  const ns = notificationReducer(undefined, fetchNotificationsSuccess());

  const action = markAsAread(1);
  const expected = notificationReducer(newState, action);
  const newState = {
    ...stateObj,
    filter: stateObj.filter,
  }

  newState.notifications.map((course) => {
    if (course.id === action.index) {
        newState.notifications.push({ ...course, isRead: true });
    } else {
        newState.notifications.push(course);
    }

  expect(expected).toEqual(newState);
})
})

it("Verifies that set type filter works", () => {
  const action = setNotificationFilter("URGENT");
  const newState = {
    ...stateObj,
    filter: action.filter,
  }

  const expected = notificationReducer(newState, action);

  expect(expected).toMatchObject(newState);
})
});

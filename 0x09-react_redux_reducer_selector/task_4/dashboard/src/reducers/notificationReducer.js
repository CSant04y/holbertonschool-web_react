import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters,
    FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/notificationActionTypes.js';
import { Map, setIn} from 'immutable';
import { notificationNormalizer } from '../schema/notifications.js'
export const stateObj = {
    notifications: [],
    filter: "DEFAULT",
}

export const notificationReducer = (state = new Map(stateObj), action) => {
    let newState = state;
    switch (action.type) {
        case "FETCH_NOTIFICATIONS_SUCCESS": {
            newState = state;
            action.data.map((course) => {
                newState.notifications.push({ ...course, isRead: false });
            })
            newState = notificationNormalizer(newState);
            return state.merge(newState, { 'notifications': newState });
        }
        case "MARK_AS_READ": {
            return setIn(state, ['entities', 'notifications', action.index])        
        }
        case "SET_TYPE_FILTER": {
            return setIn(state, ['entities', 'filter', action.filter]);
        }
    }
}

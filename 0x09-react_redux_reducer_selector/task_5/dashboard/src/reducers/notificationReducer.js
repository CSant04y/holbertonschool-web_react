import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters,
    FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/notificationActionTypes.js';
import { Map, setIn, merge} from 'immutable';
import { notificationsNormalizer } from '../schema/notifications.js'
export const stateObj = {
    filter: "DEFAULT",
    notifications: [],
}

export const notificationReducer = (state = new Map(stateObj), action) => {
    let newState = state;
    switch (action.type) {
        case "FETCH_NOTIFICATIONS_SUCCESS": {
            let notifications = [];
            action.data.map((course) => {
                notifications.push({ ...course, isRead: false });
            })
            console.log(notifications);
            notifications = notificationsNormalizer(notifications);
            console.log(notifications);

            const stateMerge = state.merge(notifications);
            console.log(stateMerge.toJS());
            return stateMerge
        }
        case "MARK_AS_READ": {
            return setIn(state, ['notifications', action.index, 'isRead'], true)        
        }
        case "SET_TYPE_FILTER": {
            return setIn(state, ['entities', 'filter', action.filter]);
        }
        default : {
            return state;
        }
    }
}

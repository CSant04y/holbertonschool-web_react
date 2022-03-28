import { Map, toJS } from 'immutable';

const filterTypeSelected = (state) => {
    return state.toJS().filter;
}

const getNotifications = (state) => {
    console.log(state.toJS())
    return state.toJS().entities.notifications;
}

const getUnreadNotifications = (state) => {
    console.log(state.toJS());
    const myArray = Object.values((state.toJS().notifications).filter(n => n.isRead === false));
    console.log(myArray);
    return Map(myArray)
}

module.exports = {
    filterTypeSelected,
    getNotifications,
    getUnreadNotifications,
}
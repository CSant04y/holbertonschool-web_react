const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

import {
    HIDE_NOTIFICATION_DRAWER,
    DISPLAY_NOTIFICATION_DRAWER,
    LOGIN,
    LOGOUT,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
  } from './uiActionTypes.js';

// Login object is returned
const Login = (email, password) => ({ type: LOGIN, user: { email, password } });
// Logout Finction is returned
const Logout = () => ({ type: LOGOUT });
// Show display drawer
const displayNotificationDrawer = () => ({ type: DISPLAY_NOTIFICATION_DRAWER });
// Hide display drawer
const hideNotificationDrawer = () => ({ type: HIDE_NOTIFICATION_DRAWER });

const loginSuccess = () => ({ type: LOGIN_SUCCESS });

const loginFailure = () => ({ type: LOGIN_FAILURE });

const loginRequest = (email, password) => {
  const result = (Login(email, password));
  fetch('../../dist/login-success.json')
    .then((res) => {
      if (res.ok) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure());
      }
    })
    .catch(() => {
      dispatch(loginFailure());
    });
}

module.exports = {
  Login,
  Logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest,
}

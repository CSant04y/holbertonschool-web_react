import logo from '../assets/HolbertonLogo.jpg';
import { getFooterCopy, getFullYear } from '../utils/utils.js'
import React from 'react';
import {StyleSheet, css} from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.AppBody)}>
      <p className={css(styles.leftMove)}>Login to access the full dashboard</p>
      <div className={css(styles.leftMove)}>
        <label className={css(styles.marRight)} htmlFor='email'>Email: </label>
        <input className={css(styles.marRight)} name='email' type='email' id='email'></input>
        <label className={css(styles.marRight)} htmlFor='password'>Password: </label>
        <input className={css(styles.marRight)} name='password' type='password' id='password'></input>
        <button>OK</button>
      </div>
      </div>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  AppBody: {
    padding: "36px 24px",
    minHeight: "60vmin",
  },
  marRight: {
    marginRight: "5px"
  },

  leftMove: {
    display: "flex",
    justifyContent: "left",
  }
})
export default Login;

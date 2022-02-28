import logo from '../assets/HolbertonLogo.jpg';
import { getFooterCopy, getFullYear } from '../utils/utils.js'
import React from 'react';
import {StyleSheet, css} from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.AppBody)}>
      <p className={css()}>Login to access the full dashboard</p>
      <div className={css(styles.inputContainer)}>
        <div>
          <label className={css([styles.inputContainer, styles.leftMove])} htmlFor='email'>Email: </label>
          <input className={css([styles.inputContainer, styles.leftMove])} name='email' type='email' id='email'></input>
        </div>
        <div>
          <label className={css([styles.inputContainer, styles.leftMove])} htmlFor='password'>Password: </label>
          <input className={css([styles.inputContainer, styles.leftMove])} name='password' type='password' id='password'></input>
        </div>
        <div>
          <button className={css([styles.inputContainer, styles.leftMove])}>OK</button>
        </div>
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
    flexDirection: 'row',
    justifyContent: "left",
  },
  inputContainer: {
		'@media (max-width: 900px)': {
      display: 'flex',
      flexDirection: "column",
      alignItems: "center",
		},
	},
})

export default Login;

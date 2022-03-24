import logo from '../assets/HolbertonLogo.jpg';
import { getFooterCopy, getFullYear } from '../utils/utils.js'
import React, { useState } from 'react';
import {StyleSheet, css} from 'aphrodite';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    }
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  }

  handleChangeEmail(event) {
    let passwd = this.state.password;
    this.setState({ 
      [event.target.name]: event.target.value,
      enableSubmit: ((event.target.value.length) > 0 && (passwd.length > 0)) ? true : false,
    });
    
  }

  handleChangePassword(event) {
    let email = this.state.email;
    this.setState({ 
      [event.target.name]: event.target.value,
      enableSubmit: ((event.target.value.length > 0) && (email.length > 0)) ? true : false, 
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className={css(styles.AppBody)}>
        <p className={css()}>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <div className={css(styles.inputContainer)}>
            <div>
              <label className={css([styles.inputContainer, styles.leftMove])} htmlFor='email'>Email: </label>
              <input className={css([styles.inputContainer, styles.leftMove])} value={this.state.email} name='email' type='email' id='email' onChange={ this.handleChangeEmail }/>
            </div>
            <div>
              <label className={css([styles.inputContainer, styles.leftMove])} htmlFor='password'>Password: </label>
              <input className={css([styles.inputContainer, styles.leftMove])} value={this.state.password} name='password' type='password' id='password' onChange={ this.handleChangePassword }/>
            </div>
            <div>
              <input className={css([styles.inputContainer, styles.leftMove])} type='submit' disabled={ !this.state.enableSubmit }/>
            </div>
          </div>
        </form>
        </div>
      </React.Fragment>
    );
  }
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

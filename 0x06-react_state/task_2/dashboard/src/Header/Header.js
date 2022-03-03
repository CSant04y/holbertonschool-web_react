import logo from '../assets/HolbertonLogo.jpg';
import { getFooterCopy, getFullYear } from '../utils/utils.js';
import { StyleSheet, css } from 'aphrodite';
import React, { useReducer } from 'react';
import AppContext from '../App/AppContext.js';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
        <div className={css(styles.AppHeader)}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className={css(styles.h1)}>School dashboard</h1>
          { user.isLoggedIn === true &&
            <section id="logoutSection">
              <hr />
              Welcome <b>{user.email}</b> <a href='#' onClick={() => logOut()}>(logout)</a>
            </section>
          }
        </div>
    );
  }
}
Header.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func,
}

Header.defaultProps = {
  user: {
		email: '',
		password: '',
		isLoggedIn: false,
	},
	logOut: () => this.logOut(),
}

const styles = StyleSheet.create({
  AppHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    borderBottom: "3px solid #DF344B",
  },
  h1: {
    margin: "auto auto auto 0",
    color: "#DF344B",
  }
})

Header.contextType = AppContext;

export default Header;

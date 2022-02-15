import logo from '../assets/HolbertonLogo.jpg';
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import React from 'react';
import PropTypes from 'prop-types'
import CourseList from '../CourseList/CourseList.js';



function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <Notifications />
    <div className="App">
      <Header />
      <div className='App-body'>
        {isLoggedIn ? <CourseList /> : <Login />}
      </div>
      <Footer />
    </div>
    </React.Fragment>
  );
}
App.defaultProps = {
  isLoggedIn: false
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default App;

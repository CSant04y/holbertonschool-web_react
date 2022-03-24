import logo from '../assets/HolbertonLogo.jpg';
import Notifications from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import React from 'react';
import PropTypes from 'prop-types'
import CourseList from '../CourseList/CourseList.js';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js'
import BodySection from '../BodySection/BodySection.js';
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.ctrlEvent = this.ctrlEvent.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    this.state = { 
      displayDrawer: false,
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
      logOut: () => this.logOut(),
      listNotifications: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
      ],
    };
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
    console.log("diplay drawer");
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
    console.log("Hide drawer");
  }

  componentDidMount() {
    document.addEventListener('keydown', this.ctrlEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.ctrlEvent);
  }

  ctrlEvent(e) {
    let k = e.key;
    console.log("This is e: ", e)
    if (e.ctrlKey && k === 'h') {
      console.log("hello");
      alert('Logging you out');
      this.state.logOut();
    }
  }

  logIn(email, password) {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      }
    })
  }

  logOut() {
    this.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      }
    })
  }
  
  markNotificationAsRead(id) {
    console.log("Hello before");
    let updatedNotifications = this.state.listNotifications.filter((notif) => {
      return notif.id !== id;
    });
    console.log("Mark notif as read");
    this.setState({
      listNotifications: updatedNotifications,
    });
  }

  render() {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];

    let {
      displayDrawer,
      user,
      logOut,
      listNotifications,
      // markNotificationAsRead,
    } = this.state;

    return (
      <AppContext.Provider value={{user, logOut}}>
        <React.Fragment>
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
          />
        <div className={css([styles.App, styles.Div])}>
          <Header />
          <div className={css([styles.AppBody, styles.Div])}>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={listCourses}/> 
             </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title={'Log in to continue'}>
                <Login logIn={this.logIn}/>
              </BodySectionWithMarginBottom>
            )}
          </div>
          <BodySection title='News from the School'>
            <p>School is Over!!!</p>
          </BodySection>
          <Footer className={css(styles.footer)}/>
        </div>
        </React.Fragment>
      </AppContext.Provider>
    );
  }
}
const styles = StyleSheet.create({
  App: {
    textAlign: "center",
    minHeight: "100vh",
  },
  Div: {
    paddingBottom: "2px",
    paddingTop: "2px",
    paddingLeft: "8px",
    paddingRight: "8px",
  }, 
  AppBody: {
    paddingBottom: "36px",
    paddingTop: "36px",
    paddingLeft: "24px",
    paddingRight: "24px",
    minHeight: "65vmin",
  },
  footer: {
    width:  "100%",
    borderTop: "3px solid #DF344B",
    padding: "16px",
  }
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { console.log('test')}
}


export default App;

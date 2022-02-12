import logo from '../assets/HolbertonLogo.jpg';
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Notifications />
    <div className="App">
      <Header />
      <Login />
      <Footer />
    </div>
    </React.Fragment>
  );
}


export default App;

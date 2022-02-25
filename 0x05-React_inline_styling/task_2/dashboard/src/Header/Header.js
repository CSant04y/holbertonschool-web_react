import logo from '../assets/HolbertonLogo.jpg';
import { getFooterCopy, getFullYear } from '../utils/utils.js';
import { StyleSheet, css } from 'aphrodite';


function Header() {
  return (
      <div className={css(styles.AppHeader)}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className={css(styles.h1)}>School dashboard</h1>
      </div>
  );
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

export default Header;

import logo from '../assets/HolbertonLogo.jpg';

import { getFooterCopy, getFullYear } from '../utils/utils.js'
import AppContext from '../App/AppContext.js';
import { StyleSheet, css } from 'aphrodite';

function Footer() {
  return (
    <AppContext.Consumer>
      {({user, logOut}) => (
        <div className={css(styles.Appfooter)}>
          <p className={css(styles.Paragraph)}>Copyright {getFullYear()} - {getFooterCopy()}</p>
          {
            user.isLoggedIn === true &&
            <p>
              <a href='#' >Contact us</a>
            </p>
          }
        </div>
      )}
    </AppContext.Consumer>
  );
}

const styles = StyleSheet.create({
  Appfooter: {
    width: "100%",
  },
  Paragraph: {
    borderTop: "3px solid #DF344B",
    padding: "16px",
  },
})

export default Footer;

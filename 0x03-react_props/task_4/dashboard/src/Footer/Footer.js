import logo from '../assets/HolbertonLogo.jpg';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils.js'

function Footer() {
  return (
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
  );
}

export default Footer;

import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={LOGO_URL} />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about-us">About Us</Link>
            </li>
            <li>
              <Link to="contact-us">Contact Us</Link>
            </li>
            <li>
              <Link to="">Cart</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;

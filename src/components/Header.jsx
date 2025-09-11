import { LOGO_URL } from "./utils/constants";

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
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
            <li>
              <a href="">Cart</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;

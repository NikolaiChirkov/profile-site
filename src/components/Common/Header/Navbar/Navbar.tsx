import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = (): JSX.Element => (
  <ul className="navbar">
    <li className="navbar__link">
      <NavLink exact activeClassName="link__active" to="/">
        Home
      </NavLink>
    </li>
    <li className="navbar__link">
      <NavLink activeClassName="link__active" to="/programming">
        Programming
      </NavLink>
    </li>
  </ul>
);

export default Navbar;
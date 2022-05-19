import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

function Header() {
    return <div className="nav_container">
        <div className="nav_box">
            <NavLink to="/">
            <img src={logo} className="logo" alt="logo" />
            </NavLink>
            <nav className="navbar">
                <ul>
                    <li>
                        <NavLink
                            className="header-link"
                            activeclassname="active-link"
                            to="/" id="home">
                        Accueil
                        </NavLink>
                    </li>
                    <li id="about">
                        <NavLink
                            className="header-link"
                            activeclassname="active-link"
                            to="/about">
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
   
}

export default Header;
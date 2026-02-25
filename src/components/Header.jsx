import { NavLink } from "react-router-dom";
import "../css/header.css";

const Header = () => {
    return (
        <nav className="main-header">
            <div className="nav-links">
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                <NavLink to="/edu" className={({ isActive }) => isActive ? "active" : ""}>Education</NavLink>
                <NavLink to="/Activity" className={({ isActive }) => isActive ? "active" : ""}>My Activities</NavLink>
                <NavLink to="/itunes" className={({ isActive }) => isActive ? "active" : ""}>iTunes Music</NavLink>
            </div>
        </nav>
    );
}
export default Header;
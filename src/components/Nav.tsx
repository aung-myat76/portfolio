import { NavLink } from "react-router-dom";
import { FaUser, FaBriefcase, FaTools, FaEnvelope } from "react-icons/fa";

const Nav = () => {
    return (
        <nav className="flex-row gap-3">
            <NavLink
                to={"/"}
                className={({ isActive }) =>
                    isActive ? "nav-link nav-active" : "nav-link"
                }>
                <FaUser title="About" />
                <span className="hidden md:block">About</span>
            </NavLink>
            <NavLink
                to={"/works"}
                className={({ isActive }) =>
                    isActive ? "nav-link nav-active" : "nav-link"
                }>
                <FaBriefcase title="Works" />
                <span className="hidden md:block">Works</span>
            </NavLink>
            <NavLink
                to={"/services"}
                className={({ isActive }) =>
                    isActive ? "nav-link nav-active" : "nav-link"
                }>
                <FaTools title="Services" />
                <span className="hidden md:block">Services</span>
            </NavLink>
            <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                    isActive ? "nav-link nav-active" : "nav-link"
                }>
                <FaEnvelope title="Contact" />
                <span className="hidden md:block">Contact </span>
            </NavLink>
        </nav>
    );
};

export default Nav;

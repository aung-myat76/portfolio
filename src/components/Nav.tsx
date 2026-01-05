import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <NavLink to={"/"}>About</NavLink>
            <NavLink to={"/works"}>Works</NavLink>
            <NavLink to={"/services"}>Services</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
        </nav>
    );
};

export default Nav;

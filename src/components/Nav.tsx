import { HashLink } from "react-router-hash-link";
import { FaUser, FaBriefcase, FaTools, FaEnvelope } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import type { FC } from "react";

type NavType = {
    active: string;
};

const Nav: FC<NavType> = ({ active }) => {
    const path = useLocation();

    console.log(active);

    return (
        <nav className="flex-row gap-3">
            <HashLink
                smooth
                to={"#about"}
                className={
                    active === "about" ? "nav-active nav-link" : "nav-link"
                }>
                <FaUser title="About" />
                <span className="hidden md:block">About</span>
            </HashLink>
            <HashLink
                smooth
                to={"#works"}
                className={
                    active === "works" ? "nav-active nav-link" : "nav-link"
                }>
                <FaBriefcase title="Works" />
                <span className="hidden md:block">Works</span>
            </HashLink>
            <HashLink
                smooth
                to={"#services"}
                className={
                    active === "services" ? "nav-active nav-link" : "nav-link"
                }>
                <FaTools title="Services" />
                <span className="hidden md:block">Services</span>
            </HashLink>
            <HashLink
                smooth
                to={"#contact"}
                className={
                    active === "contact" ? "nav-active nav-link" : "nav-link"
                }>
                <FaEnvelope title="Contact" />
                <span className="hidden md:block">Contact </span>
            </HashLink>
        </nav>
    );
};

export default Nav;

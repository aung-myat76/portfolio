import type { FC, ReactNode } from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

type HeaderType = {
    children: ReactNode;
};

const Header: FC<HeaderType> = ({ children }) => {
    return (
        <div
            id="header"
            className="bg-emerald-400 text-stone-100 flex items-center justify-between p-1">
            <header className="text-lg font-bold text-emerald-900">
                <Link to={"/"}>{children}</Link>
            </header>
            <Nav />
        </div>
    );
};

export default Header;

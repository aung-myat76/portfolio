import type { FC, ReactNode } from "react";
import Nav from "./Nav";
import { HashLink } from "react-router-hash-link";

type HeaderType = {
    children: ReactNode;
    active: string;
};

const Header: FC<HeaderType> = ({ active, children }) => {
    return (
        <div
            id="header"
            className="fixed w-full top-0 left-0 z-10 py-4 px-2 bg-emerald-400 text-stone-100 flex items-center justify-between p-1">
            <header className="text-xl font-bold text-emerald-900">
                <HashLink smooth to={"#about"}>
                    {children}
                </HashLink>
            </header>
            <Nav active={active} />
        </div>
    );
};

export default Header;

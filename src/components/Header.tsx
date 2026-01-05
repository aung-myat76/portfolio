import type { FC, ReactNode } from "react";
import Nav from "./Nav";

type HeaderType = {
    children: ReactNode;
};

const Header: FC<HeaderType> = ({ children }) => {
    return (
        <>
            <header>{children}</header>
            <Nav />
        </>
    );
};

export default Header;

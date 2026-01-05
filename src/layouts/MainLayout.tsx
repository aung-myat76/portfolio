import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
    return (
        <>
            <Header>wasabi</Header>
            <Outlet />
        </>
    );
};

export default MainLayout;

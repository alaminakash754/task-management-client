import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";

const MainLayout = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup') || location.pathname.includes('dashboard') || location.pathname.includes('createTask') || location.pathname.includes('editTask')
    return (
        <div>
             {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
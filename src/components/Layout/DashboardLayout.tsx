import { Outlet } from "react-router-dom";
import Header from "./Header";

const DashboardLayout = () => {
    return (
        <div className="container mx-auto space-y-6">
            <Header />
            <Outlet />
        </div>
    );
};

export default DashboardLayout;

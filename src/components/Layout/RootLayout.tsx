import { Outlet } from "react-router-dom";
import useMiddleware from "@/hooks/useMiddleware";

const RootLayout = () => {
    useMiddleware();
    return <Outlet />;
};

export default RootLayout;

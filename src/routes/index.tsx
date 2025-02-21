import DashboardLayout from "@/components/Layout/DashboardLayout";
import RootLayout from "@/components/Layout/RootLayout";
import LoginPage from "@/components/pages/Login";
import NotFoundPage from "@/components/pages/NotFound";
import UserPage from "@/components/pages/User";
import UserManagement from "@/components/pages/UserManagement";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/",
                element: <DashboardLayout />,
                children: [
                    {
                        path: "/",
                        element: <UserManagement />,
                    },
                    {
                        path: "/user/:id",
                        element: <UserPage />,
                    },

                    {
                        path: "*",
                        element: <NotFoundPage />,
                    },
                ],
            },
        ],
    },
]);

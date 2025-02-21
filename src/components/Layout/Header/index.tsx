import { Button } from "@/components/ui/button";
import UserProfile from "./UserProfile";
import { useAppDispatch } from "@/redux/hooks";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from "@/redux/modules/accessToken";
import Cookies from "js-cookie";

const Header = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleLogOut = () => {
        dispatch(setAccessToken(undefined));
        Cookies.remove("token"), navigate("/auth/signin");
    };
    return (
        <header className="py-5 flex gap-5 items-center justify-end">
            <UserProfile />
            <Button onClick={handleLogOut}>Log out</Button>
        </header>
    );
};

export default Header;

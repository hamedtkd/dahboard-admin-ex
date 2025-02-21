import Cookies from "js-cookie";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function useMiddleware() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const token = Cookies.get("token");

  useEffect(() => {
    console.log("Current Path:", pathname);
    console.log("Token:", token);

    
    if (!token) {
      if (pathname !== "/login") {
        navigate("/login", { replace: true });
      }
      return;
    }

    
    if (pathname === "/login") {
      navigate("/", { replace: true });
    }
  }, [pathname, token, navigate]);

  return null;
}

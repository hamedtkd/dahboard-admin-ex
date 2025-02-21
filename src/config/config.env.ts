/** -- A set of environment variables -- **/
import Cookies from "js-cookie";
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export const accessToken = Cookies.get("token");

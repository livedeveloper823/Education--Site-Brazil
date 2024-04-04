import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import instance from "../utils/axios";
import { useSelector } from "../store/index";

export function TimeoutProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const timeoutRef = useRef();
  const userData = useSelector((state) => state.userdata);
  const userEmail = userData.users.email;

  useEffect(() => {
    if (exemptedRoutes.includes(location.pathname)) return;
    const handleWindowEvents = () => {
      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        //Perform whatever logic you want in here, clear localStorage and log user out, show a popup modal or just navigate to another page
        instance
          .post("/auth/logout", { email: userEmail })
          .then(() => {
            localStorage.clear();
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      }, 1800000);
    };

    // listen for specific window events to ensure user is still active
    window.addEventListener("mousemove", handleWindowEvents);
    window.addEventListener("keydown", handleWindowEvents);
    window.addEventListener("click", handleWindowEvents);
    window.addEventListener("scroll", handleWindowEvents);

    handleWindowEvents();

    //cleanup function
    return () => {
      window.removeEventListener("mousemove", handleWindowEvents);
      window.removeEventListener("keydown", handleWindowEvents);
      window.removeEventListener("click", handleWindowEvents);
      window.removeEventListener("scroll", handleWindowEvents);
    };
  }, [navigate, location.pathname]);

  return children;
}

const exemptedRoutes = [
  "/unauthorized",
  "/register",
  "/registersuccess",
  "/forgot",
  "/verifyemail",
];

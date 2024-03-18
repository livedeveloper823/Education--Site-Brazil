import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLogin = localStorage.getItem("isLogin");

  useEffect(() => {
    if (!isLogin) {
      navigate("/", { replace: true });
    }
  }, [isLogin, navigate, location]);

	return children;
};

export default AuthGuard;

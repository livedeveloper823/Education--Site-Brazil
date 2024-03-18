import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AccessGuard = ({role, children }) => {

  const navigate = useNavigate();
  const location = useLocation();

  const userRole = localStorage.getItem("userrole");

  useEffect(() => {
    if (userRole !== role) {
      navigate('/unauthorized');
    }
  }, [navigate, location, userRole, role]);

  return children;
};

export default AccessGuard;

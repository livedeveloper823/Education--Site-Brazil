import Login from "../pages/Auth/login";
import Register from "../pages/Auth/register";
import ForgotPassword from "../pages/Auth/forgotpassword";
import VerifyEmail from "../pages/Auth/Verifyemail";
import Registersuccess from "../pages/Auth/success";
import Unauthorized from "../pages/Auth/unauthorized";

const AuthRoutes = {
  path: "/",
  children: [
    { path: "/", element: <Login /> },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "registersuccess",
      element: <Registersuccess />,
    },
    {
      path: "forgot",
      element: <ForgotPassword />,
    },
    {
      path: "verifyemail",
      element: <VerifyEmail />,
    },
    {
      path: "unauthorized",
      element: <Unauthorized />,
    },
  ],
};

export default AuthRoutes;

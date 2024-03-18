import { useRoutes } from "react-router-dom";
// project import

import AuthRoutes from "./AuthRoutes";
import MainRoutes from "./MainRoutes";
import AdminRoutes from "./AdminRoutes";

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([AuthRoutes, MainRoutes, AdminRoutes]);
}

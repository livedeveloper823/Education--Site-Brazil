import { Navigate } from "react-router-dom";

import Notifications from "../pages/Admin/Notifications";
import Settings from "../pages/Admin/Settings";
import AdminQuestions from "../pages/Admin/Questions";
import AdminLayout from "../layout/AdminLayout";
import AuthGuard from "../provider/AuthGuard";
import AccessGuard from "../provider/AccessGuard";

const AdminRoutes = {
  path: "/",
  children: [
    {
      path: "/admin",
      element: (
        <AuthGuard>
          <AccessGuard role={"admin"}>
            <AdminLayout />
          </AccessGuard>
        </AuthGuard>
      ),
      children: [
        {
          path: "/admin",
          element: <Navigate to="/admin/admin-questions" />,
        },
        {
          path: "/admin/admin-questions",
          element: <AdminQuestions />,
        },
        {
          path: "/admin/notifications",
          element: <Notifications />,
        },
        {
          path: "/admin/settings",
          element: <Settings />,
        },
      ],
    },
  ],
};

export default AdminRoutes;

import { Navigate } from "react-router-dom";

import Notifications from "../pages/Admin/Notifications";
import Settings from "../pages/Admin/Settings";
import AdminQuestions from "../pages/Admin/Questions";
import AdminLayout from "../layout/AdminLayout";

const AdminRoutes = {
    path : '/admin',
    element : <AdminLayout />,
    children:[
        {
            path: "/admin",
            element: <Navigate to="/admin/admin-questions" />
          },
          {
            path: "/admin/admin-questions",
            element: <AdminQuestions />
          },
          {
            path: "/admin/notifications",
            element: <Notifications />
          },
          {
            path: "/admin/settings",
            element: <Settings />
          },
    ],
}

export default AdminRoutes;
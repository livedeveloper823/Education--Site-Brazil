// project import
import MainLayout from "../layout/MainLayout";

// pages routing
import Dashboard from "../pages/Dashboard";
import Lessons from "../pages/Lessons";
import Questions from "../pages/Questions";
import Support from "../pages/Support";
import Ranking from "../pages/Ranking";
import { Navigate } from "react-router-dom";
import AuthGuard from "../provider/AuthGuard";
import AccessGuard from "../provider/AccessGuard";

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/student",
      element: (
        <AuthGuard>
          <AccessGuard role={"student"}>
            <MainLayout />
          </AccessGuard>
        </AuthGuard>
      ),
      children: [
        {
          path: "/student",
          element: <Navigate to="/student/dashboard" />,
        },
        {
          path: "/student/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/student/lessons",
          element: <Lessons />,
        },
        {
          path: "/student/questions",
          element: <Questions />,
        },
        {
          path: "/student/support",
          element: <Support />,
        },
        {
          path: "/student/ranking",
          element: <Ranking />,
        },
      ],
    },
  ],
};

export default MainRoutes;

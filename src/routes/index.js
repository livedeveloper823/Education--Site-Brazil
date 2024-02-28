import { useRoutes } from 'react-router-dom';
// project import

import MainRoutes from './MainRoutes';
import LoginRoute from './LoginReute';
import RegisterRoute from './RegisterRoute'; 
import ForgotRoute from './ForgotRoute';
import AdminRoutes from './AdminRoutes';
import SuccessRoute from './Registersuccess';
import Verification from './Verifyemail';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([LoginRoute,RegisterRoute,ForgotRoute, MainRoutes, AdminRoutes,Verification, SuccessRoute]);
  
}

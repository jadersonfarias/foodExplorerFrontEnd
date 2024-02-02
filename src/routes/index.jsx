import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "./auth.routes";
import { CustomerRoutes } from "./customer.routes";
import { USER_ROLE } from "../services/utils/roles";

export function Routes() {
  const { user } = useAuth();

  function AccessRoutes() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;
        default: 
        return <CustomerRoutes/>
    }
  }
  return (
    <BrowserRouter>{user ? <AccessRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
}

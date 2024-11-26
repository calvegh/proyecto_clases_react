import { isAuth, userHasRole } from "../../services/login/loginService";
import { MainLayout } from "../MainLayout";

interface PrivateRouteProps {
  children: React.ReactNode;
  roles: string[];
}

export const PrivateRoute = ({ children, roles }: PrivateRouteProps) => {
  console.log(roles);

  const auth = isAuth();
  console.log(auth);

  const hasRole = userHasRole(roles);
  console.log(hasRole);
  return (
    <>{auth && hasRole ? children : <MainLayout>Acceso denegado</MainLayout>}</>
  );
};

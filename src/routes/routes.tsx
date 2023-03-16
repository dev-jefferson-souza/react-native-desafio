import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";
import { PrivateRoute } from "./private.routes";
import { PublicRoute } from "./public.routes";

export const Routes = () => {
  const { user } = useContext(AuthContext);

  return user ? <PrivateRoute /> : <PublicRoute />;
};

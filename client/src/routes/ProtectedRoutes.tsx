import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoutes({ path, element }: any) {
  const { user } = useContext(AuthContext);
  const isLoggedIn = !!user;
  console.log(user);

  return isLoggedIn ? <Outlet /> : <Navigate to="/signup" replace />;
}

export default ProtectedRoutes;

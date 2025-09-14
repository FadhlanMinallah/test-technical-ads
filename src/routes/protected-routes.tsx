import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoutes({ isLoggedIn }: { isLoggedIn: boolean }) {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
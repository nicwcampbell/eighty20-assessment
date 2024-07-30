import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useSelector((state) => state.user.user);
  if (!user) {
    return <Navigate to="/auth" replace />; // For security purposes and UX, if the user is not authenticated then redirect them to the login page
  }
  return <Outlet />;
};

export default ProtectedRoute;

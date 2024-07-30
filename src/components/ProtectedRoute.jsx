import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;

import { Navigate, Outlet } from "react-router-dom";

const GuestRoutes = () => {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
};

export default GuestRoutes;

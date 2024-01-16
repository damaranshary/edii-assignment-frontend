import { Navigate, Outlet } from "react-router-dom";
import { User } from "../../interfaces/userInterfaces";

const AdminRoutes = () => {
  const user: string | User | null = localStorage.getItem("user");

  if (user && (JSON.parse(user)).role === "admin") {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};

export default AdminRoutes;

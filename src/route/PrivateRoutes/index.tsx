import { Navigate, Outlet } from "react-router-dom";
import { User } from "../../interfaces/userInterfaces";

const UserRoutes = () => {
  const user: string | User | null = localStorage.getItem("user");

  if (user && (JSON.parse(user)).role === "candidate_employee") {
    return <Outlet />;
  }

  return <Navigate to="/login" />;
};

export default UserRoutes;

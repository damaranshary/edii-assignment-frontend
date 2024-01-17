import { Navigate, Outlet } from "react-router-dom";

const GuestRoutes = () => {
  const user = localStorage.getItem("user");

  if (!user) {
    return <Outlet />;
  }

  if (user && JSON.parse(user).role === "admin") {
    return <Navigate to="/dashboard" />;
  }

  if (user && JSON.parse(user).role === "candidate_employee") {
    return <Navigate to="/form-biodata" />;
  }
};

export default GuestRoutes;

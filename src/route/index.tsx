import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Register from "../pages/user/Register";
import Login from "../pages/user/Login";
import FormBiodata from "../pages/user/Biodata";
import GuestRoutes from "./GuestRoutes";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./PrivateRoutes";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<div>Home</div>} />
        <Route element={<GuestRoutes />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route element={<UserRoutes />}>
          <Route path="form-biodata" element={<FormBiodata />} />
        </Route>
        <Route path="admin" element={<AdminRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;

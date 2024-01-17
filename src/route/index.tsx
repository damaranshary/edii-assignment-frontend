import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Register from "../pages/user/Register";
import Login from "../pages/user/Login";
import FormBiodata from "../pages/user/Biodata";
import GuestRoutes from "./GuestRoutes";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./PrivateRoutes";
import Layout from "../layouts";
import EditBiodata from "../pages/admin/Biodata";

const AppRouter = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/">
          <Route index element={<Navigate to="/login" />} />
          <Route element={<GuestRoutes />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route element={<UserRoutes />}>
            <Route path="form-biodata" element={<FormBiodata />} />
          </Route>
          <Route element={<AdminRoutes />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="biodata">
              <Route path=":id" element={<EditBiodata />} />
            </Route>
          </Route>
          <Route path="*" element={<div>not found</div>} />
        </Route>
      </Routes>
    </Layout>
  );
};

export default AppRouter;

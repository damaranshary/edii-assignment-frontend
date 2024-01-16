import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import Register from "../pages/user/Register";
import Login from "../pages/user/Login";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<div>Home</div>} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="admin">
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;

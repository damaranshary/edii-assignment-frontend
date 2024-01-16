import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<div>Home</div>} />
        <Route path="admin">
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;

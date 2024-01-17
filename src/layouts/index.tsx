import Sidebar from "./Sidebar";

interface RoutesProps {
  children?: React.ReactNode;
  location?: Partial<Location> | string;
}

const Layout = ({ children }: RoutesProps) => {
  const user = localStorage.getItem("user");

  if (!user) {
    return <>{children}</>;
  }

  if (user && JSON.parse(user).role === "candidate_employee") {
    return (
      <div className="flex flex-row">
        <Sidebar type="users" />
        {children}
      </div>
    );
  }

  if (user && JSON.parse(user).role === "admin") {
    return (
      <div className="flex flex-row">
        <Sidebar type="admin" />
        {children}
      </div>
    );
  }
};

export default Layout;

import { AiOutlineAudit, AiOutlineLogout } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = ({ type }: { type: string }) => {
  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("Logout Success");
    window.location.href = "/login";
  };

  if (type == "users") {
    return (
      <aside className="sticky left-0 top-0 flex h-screen w-1/12 flex-col flex-wrap gap-y-2 border border-transparent border-r-gray-200 bg-primary py-5">
        <div className="sticky flex h-full flex-col items-center justify-between gap-y-10 pt-16 ">
          <Link to="/form-biodata" className="flex flex-col items-center">
            <AiOutlineAudit className="inline-block text-3xl text-white xl:text-5xl" />
            <p className="text-center text-xs font-semibold text-white sm:text-sm md:text-base">
              Biodata
            </p>
          </Link>
          <button onClick={handleLogout} className="flex flex-col items-center">
            <AiOutlineLogout className="inline-block text-3xl text-background xl:text-5xl" />
            <p className="text-center text-xs font-semibold  text-background sm:text-sm md:text-base">
              Logout
            </p>
          </button>
        </div>
      </aside>
    );
  }

  if (type == "admin") {
    return (
      <aside className="sticky left-0 top-0 flex h-screen w-1/12 flex-col flex-wrap gap-y-2 border border-transparent border-r-gray-200 bg-primary py-5">
        <div className="sticky flex h-full flex-col items-center justify-between gap-y-10 pt-16 ">
          <Link to="/dashboard" className="flex flex-col items-center">
            <AiOutlineAudit className="inline-block text-3xl text-white xl:text-5xl" />
            <p className="text-center text-xs font-semibold text-white sm:text-sm md:text-base">
              List Biodata
            </p>
          </Link>
          <button onClick={handleLogout} className="flex flex-col items-center">
            <AiOutlineLogout className="inline-block text-3xl text-background xl:text-5xl" />
            <p className="text-center text-xs font-semibold  text-background sm:text-sm md:text-base">
              Logout
            </p>
          </button>
        </div>
      </aside>
    );
  }
};

export default Sidebar;

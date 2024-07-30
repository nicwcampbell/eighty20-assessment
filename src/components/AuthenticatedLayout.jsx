import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const AuthenticatedLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthenticatedLayout;

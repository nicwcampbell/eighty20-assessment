import { Link } from "react-router-dom";
import Logout from "./Logout";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="bg-blue-500 p-2 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center">
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className={`rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm ${
                  location.pathname === "/"
                    ? "bg-white text-blue-600"
                    : "bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/profile"
                className={`rounded-md px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm ${
                  location.pathname === "/profile"
                    ? "bg-white text-blue-600"
                    : "bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                }`}
              >
                Profile
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Logout />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import Logout from "./Logout";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-2 fixed top-0 w-full z-50">
      <div className="flex justify-between items-center">
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/profile" className="text-white">
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

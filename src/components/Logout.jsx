import { signOutUser } from "../state/user/userSlice";
import { useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center">
      <button
        className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        onClick={() => dispatch(signOutUser())}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;

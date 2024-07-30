import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import updateUserPassword from "../utils/updateUserPassword";
import { setErrorCode } from "../state/user/userSlice";
import errorMessageInterpreter from "../utils/errorMessageInterpreter";

const Profile = () => {
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const errorCode = useSelector((state) => state.user.errorCode);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsSubmitting(true);
      await updateUserPassword(oldPassword, newPassword);
    } catch (error) {
      console.log(error);
      dispatch(setErrorCode(error.code));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
          Profile
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="oldPassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Current password
            </label>
            <div className="mt-2">
              <input
                id="oldPassword"
                name="oldPassword"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="newPassword"
                name="newPassword"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              Sign in
            </button>
            {errorCode && (
              <p className="text-red-700 text-center mt-5">
                {errorMessageInterpreter(errorCode)}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;

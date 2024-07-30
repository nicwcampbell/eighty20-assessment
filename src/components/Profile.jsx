import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import updateUserPassword from "../utils/updateUserPassword";
import { setErrorCode } from "../state/user/userSlice";
import errorMessageInterpreter from "../utils/errorMessageInterpreter";

const Profile = () => {
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const errorCode = useSelector((state) => state.user.errorCode);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (newPassword !== newPasswordConfirmation) {
        dispatch(setErrorCode("Passwords do not match."));
        return;
      } else if (currentPassword === newPassword) {
        dispatch(setErrorCode("Current and new password can't be the same."));
        return;
      }

      setIsSubmitting(true);
      await updateUserPassword(currentPassword, newPassword);
      dispatch(setErrorCode(""));
      alert("Password successfully changed.");
      setCurrentPassword("");
      setNewPassword("");
      setNewPasswordConfirmation("");
    } catch (error) {
      dispatch(setErrorCode(error.message));
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
        <h3 className="text-center text-l leading-9 tracking-tight text-gray-900 mt-5">
          Change password
        </h3>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="currentPassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Current password
            </label>
            <div className="mt-2">
              <input
                id="currentPassword"
                name="currentPassword"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              New password
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
            <label
              htmlFor="passwordConfirmation"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm new password
            </label>
            <div className="mt-2">
              <input
                id="newPasswordConfirmation"
                name="newPasswordConfirmation"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                value={newPasswordConfirmation}
                onChange={(e) => setNewPasswordConfirmation(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              Change password
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

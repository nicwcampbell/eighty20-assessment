import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../state/user/userSlice";
import { setErrorCode } from "../state/user/userSlice";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      if (password !== passwordConfirmation) {
        dispatch(setErrorCode("Passwords do not match."));
        return;
      }

      setIsSubmitting(true);
      await dispatch(signUp({ email, password }));
    } catch (error) {
      console.log("hello");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="passwordConfirmation"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Confirm password
            </label>
            <div className="mt-2">
              <input
                id="passwordConfirmation"
                name="passwordConfirmation"
                type="password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

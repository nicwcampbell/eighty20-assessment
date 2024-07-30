import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import SignUp from "./SignUp";
import { Navigate } from "react-router-dom";
import AuthSwitch from "./AuthSwitch";
import errorMessageInterpreter from "../utils/errorMessageInterpreter";
import { setErrorCode } from "../state/user/userSlice";

const Auth = () => {
  const dispatch = useDispatch();

  const errorCode = useSelector((state) => state.user.errorCode);
  const user = useSelector((state) => state.user.user);
  const [authType, setAuthType] = useState("login");

  if (user) {
    return <Navigate to="/" replace />;
  }

  const switchAuthType = () => {
    setAuthType((prevAuthType) =>
      prevAuthType === "login" ? "signUp" : "login"
    );
    dispatch(setErrorCode(null));
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        {authType === "login" ? <Login /> : <SignUp />}
        {errorCode && (
          <p className="text-red-700 text-center mt-5">
            {errorMessageInterpreter(errorCode)}
          </p>
        )}
        <AuthSwitch authType={authType} switchAuthType={switchAuthType} />
      </div>
    </div>
  );
};

export default Auth;

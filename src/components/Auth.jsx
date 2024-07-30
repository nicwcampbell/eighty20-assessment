import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import AuthSwitch from "./AuthSwitch";
import errorMessageInterpreter from "../utils/errorMessageInterpreter";
import { setErrorCode } from "../state/user/userSlice";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const errorCode = useSelector((state) => state.user.errorCode);

  const user = useSelector((state) => state.user.user);

  if (user) {
    navigate("/");
  }

  const [authType, setAuthType] = useState("login");

  const switchAuthType = () => {
    setAuthType((prevAuthType) =>
      prevAuthType === "login" ? "signUp" : "login"
    );
    dispatch(setErrorCode(null));
  };

  return (
    <>
      {authType === "login" ? <Login /> : <SignUp />}
      {errorCode && (
        <p className="text-red-700 text-center mt-5">
          {errorMessageInterpreter(errorCode)}
        </p>
      )}
      <AuthSwitch authType={authType} switchAuthType={switchAuthType} />
    </>
  );
};

export default Auth;

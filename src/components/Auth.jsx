import { useState } from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";
import AuthSwitch from "./AuthSwitch";

const Auth = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  if (user) {
    navigate("/");
  }

  const [authType, setAuthType] = useState("login");

  const switchAuthType = () => {
    setAuthType((prevAuthType) =>
      prevAuthType === "login" ? "signUp" : "login"
    );
  };

  return (
    <>
      {authType === "login" ? <Login /> : <SignUp />}
      <AuthSwitch authType={authType} switchAuthType={switchAuthType} />
    </>
  );
};

export default Auth;

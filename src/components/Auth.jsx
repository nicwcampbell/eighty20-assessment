import { useState } from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import SignUp from "./SignUp";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.user.user);

  if (user) {
    navigate("/");
  }

  const [authType, setAuthType] = useState("login");

  return <>{authType === "login" ? <Login /> : <SignUp />}</>;
};

export default Auth;

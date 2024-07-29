import React from "react";

const AuthSwitch = ({ authType, switchAuthType }) => {
  return (
    <p className="mt-10 text-center text-sm text-gray-500">
      {authType === "login"
        ? "Don't have an account? "
        : "Already have an account? "}
      <button
        onClick={switchAuthType}
        className="font-semibold leading-6 text-blue-600 hover:text-blue-500 bg-transparent border-none cursor-pointer"
      >
        {authType === "login" ? "Sign up" : "Login"}
      </button>
    </p>
  );
};

export default AuthSwitch;

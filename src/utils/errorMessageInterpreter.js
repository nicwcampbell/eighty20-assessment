const errorMessageInterpreter = (errorCode) => {
  switch (errorCode) {
    case "auth/invalid-credential":
      return "Invalid credentials. Please check your email and password.";
    case "auth/user-not-found":
      return "User not found. Please sign up.";
    case "auth/wrong-password":
      return "Wrong password. Please try again.";
    default:
      return "An unknown error occurred. Please try again.";
  }
};

export default errorMessageInterpreter;

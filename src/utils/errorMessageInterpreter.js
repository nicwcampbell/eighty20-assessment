const errorMessageInterpreter = (errorCode) => {
  switch (errorCode) {
    case "auth/invalid-credential":
      return "Invalid credentials. Please check your email and password.";
    case "auth/user-not-found":
      return "User not found. Please sign up.";
    case "auth/wrong-password":
      return "Wrong password. Please try again.";
    case "auth/email-already-in-use":
      return "This email is already in use.";
    case "Passwords do not match.":
      return "Passwords do not match.";
    case "auth/weak-password":
      return "Password must be at least 6 characters.";
    default:
      return "An unknown error occurred. Please try again.";
  }
};

export default errorMessageInterpreter;

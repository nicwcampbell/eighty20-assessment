// Interpret the Firebase messages into more user friendly ones
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
    case "Error: FirebaseError: Firebase: Error (auth/invalid-credential).":
      return "Invalid credentials. Please check your current password.";
    case "FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password).":
      return "Password must be at least 6 characters.";
    case "Current and new password can't be the same.":
      return "Current and new password can't be the same.";
    default:
      return "An unknown error occurred. Please try again.";
  }
};

export default errorMessageInterpreter;

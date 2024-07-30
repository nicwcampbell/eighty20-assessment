import { reauthenticateWithCredential } from "firebase/auth";
import { auth } from "../config/firebase";

const reauthenticateUser = async (password) => {
  const user = auth.currentUser;

  try {
    await reauthenticateWithCredential(user, {
      email: user.email,
      password: password,
    });
  } catch (error) {
    throw new Error(error);
  }
};

export default reauthenticateUser;

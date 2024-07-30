import { reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { auth } from "../config/firebase";

const reauthenticateUser = async (password) => {
  const user = auth.currentUser;
  const credential = EmailAuthProvider.credential(user.email, password);

  try {
    await reauthenticateWithCredential(user, credential);
  } catch (error) {
    throw new Error(error);
  }
};

export default reauthenticateUser;

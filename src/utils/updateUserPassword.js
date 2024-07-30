import { auth } from "../config/firebase";
import { updatePassword } from "firebase/auth";
import reauthenticateUser from "../utils/reauthenticateUser";

const updateUserPassword = async (currentPassword, newPassword) => {
  const user = auth.currentUser; //Chose not to use state user in case that ever starts to deviate from the user required for the updatePassword API

  try {
    await reauthenticateUser(currentPassword); //Required if beyond a certain time as a security measure. Making is always to be extra secure.
    await updatePassword(user, newPassword);
  } catch (error) {
    throw new Error(error);
  }
};

export default updateUserPassword;

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";
import { setIsAuthInitialized, setUser } from "../state/user/userSlice";

const useAuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        dispatch(setUser(user.toJSON()));
      } else {
        dispatch(setUser(null));
      }
      dispatch(setIsAuthInitialized(true));
    });

    return unsubscribe;
  }, [dispatch]);
};

export default useAuthListener;

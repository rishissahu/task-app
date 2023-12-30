import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

export const setUser = (userData) => {
  return {
    type: "SET_USER",
    payload: userData,
  };
};

export const clearUser = () => {
  return {
    type: "CLEAR_USER",
  };
};

export const checkUser = (uid) => async (dispatch) => {
  if (uid) {
    const userDocRef = doc(collection(firestore, "users"), uid);
    const userDocSnapshot = await getDoc(userDocRef);
    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();

      dispatch(
        setUser({
          name: userData.name,
          email: userData.email,
          age: userData.age,
          profilePhoto: userData.profilePhoto,
          uid: uid,
        }),
      );
    }
  } else {
    dispatch(setUser({}));
  }
};

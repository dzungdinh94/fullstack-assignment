import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const signInWithGoogle = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  return signInWithPopup(auth, provider);
};

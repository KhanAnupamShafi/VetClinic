import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../firebase/firebase.init";

initializeFirebase(); //initiate required before using firebase

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const auth = getAuth();

  //Google Sign-in
  const handleGoogleSignIn = () => {
    setIsLoading(true);
    //Force pop up when signed in previously with a single google account
    googleProvider.setCustomParameters({
      prompt: "select_account",
    });
    return signInWithPopup(auth, googleProvider);

    // console.log(user);
  };

  //Facebook Sign-in

  const handleFacebookSignIn = () => {
    setIsLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  //email-password sign-in

  const handleUserRegister = (userData) => {
    setIsLoading(true);
    const { multipleErrorInput: email, ErrorInput: password } = userData;
    console.log(email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        // const { email, photoURL, displayName } = result.user;

        // const userInfo = {
        //   email: email,
        //   photoURL,
        //   name: displayName,
        // };
        updateInfo(result.user?.email);
        setUser(result.user);
        verifyEmail();

        // ...
        setError("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMsg = error.message;
        setError(errorCode, errorMsg);
        // ..
      })
      .finally(setIsLoading(false));
  };

  //sign in
  const signInUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
    //   .then((result) => {
    //     // Signed in
    //     setUser(result.user);
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorMessage = error.message;
    //     setError(errorMessage);
    //   })
    //   .finally(setIsLoading(true));
  };

  //update info

  const updateInfo = (mail) => {
    updateProfile(auth.currentUser, {
      // eslint-disable-next-line no-restricted-globals
      displayName: mail,
      photoURL: "https://source.unsplash.com/random/200x200?sig=1",
    })
      .then((r) => {
        // Profile updated!
        setUser(r.user);
        // ...
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  //verify
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then((result) => {
      setError("Email Sent! Pls Check");
      //   gotoLogin();
    });
  };

  //sign-Out
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({}); // remove user
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(setIsLoading(false));
  };

  //special observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    user,
    handleGoogleSignIn,
    handleFacebookSignIn,
    handleUserRegister,
    updateInfo,
    logOut,
    signInUser,
    error,
    isLoading,
    setUser,
    setIsLoading,
    setError,
  };
};

export default useFirebase;

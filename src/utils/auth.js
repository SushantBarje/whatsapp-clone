import React from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db, auth } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setErrorDetails } from "../features/errorSlice";

export const createUser = ({ fullName, email, password }) => {
  // const dispatch = useDispatch();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      updateProfile(auth.currentUser, {
        displayName: fullName,
        photoURL: " ",
      }).then(async () => {
        const docRef = await setDoc(doc(db, "users", email), {
          name: fullName,
          photoURL: " ",
        });
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      console.log(errorMessage);
      console.log(errorCode);
    });
};

export const loginUser = ({ email, password }) => {
  const dispatch = useDispatch();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      if (errorCode == "auth/user-not-found") {
        dispatch(
          setErrorDetails({
            errorCode: errorCode,
            errorMessage: errorMessage,
          })
        );
      }
      console.log(errorCode);
      console.log(errorMessage);
    });
};

import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Register.css";

import { useForm } from "react-hook-form";
import { createUser } from "../../utils/auth";

import Button from "@mui/material/Button";
import MailLockIcon from "@mui/icons-material/MailLock";
import KeyIcon from "@mui/icons-material/Key";
import { useDispatch } from "react-redux";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db, auth } from "../../firebase";
import {
  setDoc,
  doc,
  serverTimestamp,
  addDoc,
  collection,
} from "firebase/firestore";
import { setErrorDetails } from "../../features/errorSlice";

const Register = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const registerUser = (formData) => {
    console.log(formData);
    const { fullName, email, password } = formData;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: fullName,
          photoURL: " ",
        }).then(async () => {
          const userRef = doc(db, "users");
          // const docRef = await setDoc(userRef, {
          //   name: fullName,
          //   email: email,
          //   photoURL: null,
          //   user_created_timestamp: serverTimestamp(),
          //   user_updated_timestamp: null,
          //   chatsId: [],
          // });
          const chatRef = await addDoc(
            collection(doc(userRef, "chats", email), "message"),
            {
              message: "First Message",
              timestamp: serverTimestamp(),
              seen: false,
              sender: email,
              receiver: email,
            }
          );
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        dispatch(
          setErrorDetails({
            errorCode: errorCode,
            errorMessage: errorMessage,
          })
        );

        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div className="Register">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4406/4406172.png"
        alt=""
      />
      <h3>Register</h3>
      <form onSubmit={handleSubmit(registerUser)}>
        <div className="register__input">
          <KeyIcon className="register__inputIcon"></KeyIcon>
          <input
            name="fullName"
            // onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
            {...register("fullName", { required: true })}
          />
        </div>
        <div className="register__input">
          <MailLockIcon className="register__inputIcon"></MailLockIcon>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            placeholder="Email address"
            {...register("email", { required: true })}
          />
        </div>
        <div className="register__input">
          <KeyIcon className="register__inputIcon"></KeyIcon>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>
        <Button type="submit" variant="contained">
          Log in
        </Button>
      </form>
    </div>
  );
};

Register.propTypes = {};

Register.defaultProps = {};

export default Register;

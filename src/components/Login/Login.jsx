import React from "react";
import PropTypes from "prop-types";
import "./Login.css";
import { useForm } from "react-hook-form";

import Button from "@mui/material/Button";
import MailLockIcon from "@mui/icons-material/MailLock";
import KeyIcon from "@mui/icons-material/Key";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { setErrorDetails } from "../../features/errorSlice";
// import { loginUser } from "../../utils/auth";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const signIn = (formData) => {
    const { email, password } = formData;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const errors = ["auth/user-not-found"];
        if (errors.includes(errorCode))
          dispatch(
            setErrorDetails({
              errorCode: errorCode,
              errorMessage: "Invalid User",
            })
          );

        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <div className="Login">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4406/4406172.png"
        alt=""
      />
      <h3>Login</h3>
      <form onSubmit={handleSubmit(signIn)}>
        <div className="login__input">
          <MailLockIcon className="login__inputIcon"></MailLockIcon>
          <input
            name="email"
            {...register("email")}
            type="text"
            placeholder="Email address"
          />
        </div>
        <div className="login__input">
          <KeyIcon className="login__inputIcon"></KeyIcon>
          <input
            name="password"
            {...register("password")}
            type="password"
            placeholder="Password"
          />
        </div>
        <Button type="submit" variant="contained">
          Log in
        </Button>
      </form>
    </div>
  );
};

Login.propTypes = {};

Login.defaultProps = {};

export default Login;

import React from "react";
import PropTypes from "prop-types";
import "./Login.css";
import { useForm } from "react-hook-form";

import Button from "@mui/material/Button";
import MailLockIcon from "@mui/icons-material/MailLock";
import KeyIcon from "@mui/icons-material/Key";
import { loginUser } from "../../utils/auth";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const signIn = (formData) => {
    loginUser(formData);
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

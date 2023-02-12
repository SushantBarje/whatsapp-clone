import React from "react";
import PropTypes from "prop-types";
import "./Login.css";

import Button from "@mui/material/Button";
import MailLockIcon from "@mui/icons-material/MailLock";
import KeyIcon from "@mui/icons-material/Key";

const Login = () => {
  return (
    <div className="Login">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4406/4406172.png"
        alt=""
      />
      <h3>Login</h3>
      <form>
        <div className="login__input">
          <MailLockIcon className="login__inputIcon"></MailLockIcon>
          <input type="text" placeholder="Email address" />
        </div>
        <div className="login__input">
          <KeyIcon className="login__inputIcon"></KeyIcon>
          <input type="password" placeholder="Password" />
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

import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Layout.css";
import Login from "../Login/Login";
import Register from "../Register/Register";

import Button from "@mui/material/Button";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Layout = () => {
  const [isRegister, setRegister] = useState(false);
  return (
    <div className="Layout">
      <div className="sideWall">
        {isRegister ? (
          <>
            <h2>
              Wow great move<div> Start with your Email</div>
            </h2>
            <Button
              onClick={(e) => setRegister(false)}
              variant="contained"
              endIcon={<WhatsAppIcon></WhatsAppIcon>}
            >
              Oops! Login
            </Button>
          </>
        ) : (
          <>
            <h2>
              Not Connected<div> Hmm... Let's Connect now.</div>
            </h2>
            <Button
              onClick={(e) => setRegister(true)}
              variant="contained"
              endIcon={<WhatsAppIcon></WhatsAppIcon>}
            >
              Register
            </Button>
          </>
        )}
      </div>
      {isRegister ? <Register></Register> : <Login></Login>}
    </div>
  );
};

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;

import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import GroupsIcon from "@mui/icons-material/Groups";
import IconButton from "@mui/material/IconButton";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";

const Header = ({ menuOptions, imageURL, chatName }) => {
  const dispatch = useDispatch();
  const signout = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out");
        dispatch(
          login({
            user: null,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const MenuOptionsDisplay = (menuOptions) => {
    return menuOptions.map((menuOption, index) => (
      <IconButton key={index} className="header__option">
        {menuOption}
      </IconButton>
    ));
  };
  return (
    <div className="Header">
      <div className="header_profileSection">
        <Avatar
          onClick={signout}
          sx={{ width: 40, height: 40 }}
          src={imageURL}
        />
        <h3>{chatName}</h3>
      </div>

      <div className="headerLeft__box">{MenuOptionsDisplay(menuOptions)}</div>
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;

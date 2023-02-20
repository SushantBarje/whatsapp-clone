import React, { useState } from "react";
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
import { logout } from "../../features/userSlice";

const Header = ({ menuOptions, imageURL, chatName, whichHeader }) => {
  const dispatch = useDispatch();
  const [leftHeaderPicClick, setleftHeaderPicClick] = useState(false);
  const selectProfilePicOptions = () => {
    leftHeaderPicClick
      ? setleftHeaderPicClick(false)
      : setleftHeaderPicClick(true);
  };
  const changeProfilePic = () => {
    console.log("hello");
  };
  const signout = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out");
        dispatch(logout(null));
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
          onClick={selectProfilePicOptions}
          sx={{ width: 40, height: 40 }}
          src={imageURL}
        />
        {whichHeader == "header__left" && leftHeaderPicClick && (
          <div className="header__left__profile__menu">
            <p
              onClick={changeProfilePic}
              className="header__left__change_profile_pic"
            >
              Change Profile Picture
            </p>
            <p onClick={signout} className="header__left__logout">
              Log Out
            </p>
          </div>
        )}
        <h3>{chatName}</h3>
      </div>
      <div className="headerLeft__box">{MenuOptionsDisplay(menuOptions)}</div>
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;

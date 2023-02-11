import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import GroupsIcon from "@mui/icons-material/Groups";
import IconButton from "@mui/material/IconButton";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Header = ({ menuOptions, imageURL, chatName }) => {
  const MenuOptionsDisplay = (menuOptions) => {
    return menuOptions.map((menuOption) => (
      <IconButton className="header__option">{menuOption}</IconButton>
    ));
  };
  return (
    <div className="Header">
      <div className="header_profileSection">
        <img src={imageURL} />
        <h3>{chatName}</h3>
      </div>

      <div className="headerLeft__box">{MenuOptionsDisplay(menuOptions)}</div>
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;

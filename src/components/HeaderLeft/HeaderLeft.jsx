import React from "react";
import PropTypes from "prop-types";
import "./HeaderLeft.css";
import GroupsIcon from "@mui/icons-material/Groups";
import IconButton from "@mui/material/IconButton";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const HeaderLeft = () => {
  return (
    <div className="HeaderLeft">
      <img src="https://pps.whatsapp.net/v/t61.24694-24/156606516_223405766360003_6135443148643623556_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQhQbDkZgf65dzn3J_5pBejETdf8JhNHTG5E1d_J5NHew&oe=63F49FB8" />
      <div className="headerLeft__box">
        <IconButton className="headerLeft__icon">
          <GroupsIcon></GroupsIcon>
        </IconButton>
        <IconButton className="headerLeft__icon">
          <DonutLargeIcon></DonutLargeIcon>
        </IconButton>
        <IconButton className="headerLeft__icon">
          <ChatIcon></ChatIcon>
        </IconButton>
        <IconButton className="headerLeft__icon">
          <MoreVertIcon></MoreVertIcon>
        </IconButton>
      </div>
    </div>
  );
};

HeaderLeft.propTypes = {};

HeaderLeft.defaultProps = {};

export default HeaderLeft;

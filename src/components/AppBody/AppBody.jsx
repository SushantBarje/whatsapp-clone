import React from "react";
import PropTypes from "prop-types";
import "./AppBody.css";

import HeaderLeft from "../HeaderLeft/HeaderLeft";
import HeaderRight from "../HeaderRight/HeaderRight";

import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

const AppBody = () => {
  return (
    <div className="appBody">
      <div className="appBody__left">
        <HeaderLeft></HeaderLeft>
        <div className="chatSearch">
          <div className="chatSearch__input">
            <SearchIcon></SearchIcon>
            <input placeholder="Search or start a new chat" type="text" />
          </div>
          <FilterListIcon></FilterListIcon>
          <div className="chat_list_container">
            <ChatList></ChatList>
          </div>
        </div>
      </div>
      <div className="appBody__right">
        <HeaderRight></HeaderRight>
      </div>
    </div>
  );
};

AppBody.propTypes = {};

AppBody.defaultProps = {};

export default AppBody;

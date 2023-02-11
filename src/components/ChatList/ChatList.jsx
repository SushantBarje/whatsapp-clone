import React from "react";
import PropTypes from "prop-types";
import "./ChatList.css";

const ChatList = ({ imageURL, chatName, timestamp, lastMessage }) => {
  return (
    <div className="chatList">
      <img src={imageURL} />
      <div className="chatList__details">
        <h4>
          {chatName} <span className="chatList_timestamp">{timestamp}</span>
        </h4>
        <p>{lastMessage}</p>
      </div>
    </div>
  );
};

ChatList.propTypes = {};

ChatList.defaultProps = {};

export default ChatList;

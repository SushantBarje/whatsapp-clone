import React from "react";
import PropTypes from "prop-types";
import "./Chat.css";

const Chat = ({ message, isMyMessage, timestamp, isRead }) => {
  return (
    <div className="Chat">
      {/* <div className="chat__messageBox"> */}
        <p className="chat__message">{message}</p>
        <p className="chat__timestamp">{timestamp}</p>
      {/* </div> */}
      {/* <span className="chat_pointer"></span> */}
    </div>
  );
};

Chat.propTypes = {};

Chat.defaultProps = {};

export default Chat;

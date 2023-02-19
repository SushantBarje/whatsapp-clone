import React from "react";
import PropTypes from "prop-types";
import "./ChatList.css";
import { useDispatch } from "react-redux";
import { enterChat } from "../../features/chatSlice";
import Avatar from "@mui/material/Avatar";

const ChatList = ({
  imageURL,
  chatName,
  timestamp = " ",
  lastMessage = " ",
  id,
}) => {
  const dispatch = useDispatch();

  const selectChat = () => {
    if (id) {
      dispatch(
        enterChat({
          chatId: id,
        })
      );
    }
  };

  return (
    <div className="chatList" onClick={selectChat}>
      <Avatar
        className="avatar"
        sx={{ width: 50, height: 50 }}
        src={imageURL}
      />
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

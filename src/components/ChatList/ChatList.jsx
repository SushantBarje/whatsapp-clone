import React from "react";
import PropTypes from "prop-types";
import "./ChatList.css";
import { useDispatch } from "react-redux";
import { enterRoom } from "../../features/chatSlice";

const ChatList = ({ imageURL, chatName, timestamp, lastMessage, id }) => {
  const dispatch = useDispatch();

  const selectChat = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };
  return (
    <div className="chatList" onClick={selectChat}>
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

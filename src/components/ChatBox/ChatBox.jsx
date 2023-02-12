import React from "react";
import PropTypes from "prop-types";
import "./ChatBox.css";
import Chat from "../Chat/Chat";

const ChatBox = ({ roomId }) => {
  return (
    <div className="ChatBox">
      <Chat
        message={
          "Hellosdafsdfasdfsadfasdkfjlakejorinwenfdaasdfaskldfjoiwenwenfksadlkasdlfkeowenfsdsdadscsadfnakslkdfjweorwjpefwleknflsadncaskdowekfnasdcl"
        }
        isMyMessage={true}
        timestamp={"10:20 pm"}
        isRead={true}
      ></Chat>
      <Chat
        message={"Hello"}
        isMyMessage={true}
        timestamp={"10:20 pm"}
        isRead={true}
      ></Chat>
    </div>
  );
};

ChatBox.propTypes = {};

ChatBox.defaultProps = {};

export default ChatBox;

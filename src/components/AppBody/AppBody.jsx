import React from "react";
import PropTypes from "prop-types";
import "./AppBody.css";

import Header from "../Header/Header";
import ChatList from "../ChatList/ChatList";
import ChatBox from "../ChatBox/ChatBox";

import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import GroupsIcon from "@mui/icons-material/Groups";
import IconButton from "@mui/material/IconButton";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

const AppBody = () => {
  const sendMessage = () => {};
  return (
    <div className="appBody">
      <div className="appBody__left">
        <Header
          menuOptions={[
            <GroupsIcon />,
            <DonutLargeIcon />,
            <ChatIcon />,
            <MoreVertIcon />,
          ]}
          imageURL={
            "https://pps.whatsapp.net/v/t61.24694-24/156606516_223405766360003_6135443148643623556_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQhQbDkZgf65dzn3J_5pBejETdf8JhNHTG5E1d_J5NHew&oe=63F49FB8"
          }
        ></Header>
        <div className="chatSearch">
          <div className="chatSearch__input">
            <SearchIcon></SearchIcon>
            <input placeholder="Search or start a new chat" type="text" />
          </div>
          <FilterListIcon></FilterListIcon>
        </div>
        <div className="chat_list_container">
          <ChatList
            imageURL={
              "https://pps.whatsapp.net/v/t61.24694-24/156606516_223405766360003_6135443148643623556_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQhQbDkZgf65dzn3J_5pBejETdf8JhNHTG5E1d_J5NHew&oe=63F49FB8"
            }
            chatName={"Sushant Barje"}
            timestamp={"6:54 pm"}
            lastMessage={
              "Hellodsfasdfjkajsdlfkajsldkfjlaskdfjaksdjflkasdjlfkasjdlfkasjdlfksdafsdfasdf"
            }
            id="1"
          ></ChatList>
          <ChatList
            imageURL={
              "https://pps.whatsapp.net/v/t61.24694-24/156606516_223405766360003_6135443148643623556_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQhQbDkZgf65dzn3J_5pBejETdf8JhNHTG5E1d_J5NHew&oe=63F49FB8"
            }
            chatName={"Supriya Barje"}
            timestamp={"6:54 pm"}
            lastMessage={
              "Hellodsfasdfjkajsdlfkajsldkfjlaskdfjaksdjflkasdjlfkasjdlfkasjdlfksdafsdfasdf"
            }
            id="2"
          ></ChatList>
        </div>
      </div>
      <div className="appBody__right">
        <Header
          menuOptions={[<SearchIcon />, <MoreVertIcon />]}
          imageURL={
            "https://pps.whatsapp.net/v/t61.24694-24/156606516_223405766360003_6135443148643623556_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQhQbDkZgf65dzn3J_5pBejETdf8JhNHTG5E1d_J5NHew&oe=63F49FB8"
          }
          chatName={"Sushant Barje"}
        ></Header>
        <ChatBox></ChatBox>
        <div className="input_box">
          <IconButton className="input_chat_option">
            <InsertEmoticonIcon></InsertEmoticonIcon>
          </IconButton>
          <IconButton className="input_chat_option">
            <AttachFileIcon></AttachFileIcon>
          </IconButton>
          <form onSubmit={sendMessage()}>
            <input type="text" placeholder="Type a message" />
            <button type="submit">SEND</button>
          </form>
          <IconButton className="input_chat_option">
            <KeyboardVoiceIcon></KeyboardVoiceIcon>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

AppBody.propTypes = {};

AppBody.defaultProps = {};

export default AppBody;

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./AppBody.css";

import Header from "../Header/Header";
import ChatList from "../ChatList/ChatList";
import ChatBox from "../ChatBox/ChatBox";

import { useCollection } from "react-firebase-hooks/firestore";

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
import { useSelector } from "react-redux";
import { selectChatId } from "../../features/chatSlice";
import { useDocument } from "react-firebase-hooks/firestore";
import {
  doc,
  query,
  orderBy,
  startAt,
  endAt,
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";
import SearchBox from "../SearchBox/SearchBox";
import { selectsearchText } from "../../features/searchSlice";
import { useForm } from "react-hook-form";
import { selectUserData } from "../../features/userSlice";
import { setDoc, addDoc, serverTimestamp } from "firebase/firestore";

const AppBody = () => {
  const chatId = useSelector(selectChatId);
  const searchInputText = useSelector(selectsearchText);
  const [searchResults, setSearchResults] = useState([]);
  const [searchActivate, setSearchActivate] = useState(false);
  const user = useSelector(selectUserData);
  const [chatsData, setChatsData] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const [chatDetails, loading, error] = useDocument(
    chatId && doc(db, "users", chatId)
  );
  const [chats, chatLoading, chatError] = useCollection(
    collection(doc(db, "users", user.email), "chats")
  );

  console.log(chatDetails);
  const sendMessage = async (formData) => {
    console.log(formData);
    const { message } = formData;
    console.log(chatDetails.id);
    setSearchResults([]);
    setValue("message", "");
    const chatRef = collection(doc(db, "users", user.email), "chats");
    const chatDetailsRef = doc(chatRef, chatDetails.id);
    const chatDetailsSubmit = await setDoc(chatDetailsRef, {
      name: chatDetails?.data()?.name,
    });
    const messagesRef = collection(chatDetailsRef, "messages");

    const messagesSubmit = await addDoc(messagesRef, {
      message: message,
      timestamp: serverTimestamp(),
      seen: false,
      sender: user.email,
      receiver: chatDetails.id,
    });
  };

  useEffect(() => {
    const getSearchResult = async () => {
      const ref = collection(db, "users");
      const q = query(
        ref,
        orderBy("name"),
        startAt(searchInputText),
        endAt(searchInputText + "\uf8ff")
      );

      const querySnapshot = await getDocs(q);
      const temp = [];
      querySnapshot.forEach((doc) => {
        temp.push({ id: doc.id, data: doc.data() });
      });

      setSearchResults(temp);
    };

    try {
      if (searchInputText.length != 0) getSearchResult();
    } catch (error) {
      setSearchResults([]);
    }
  }, [searchInputText]);
  console.log(user);
  return (
    <div className="appBody">
      <div className="appBody__left">
        <Header
          whichHeader={"header__left"}
          menuOptions={[
            <GroupsIcon />,
            <DonutLargeIcon />,
            <ChatIcon />,
            <MoreVertIcon />,
          ]}
          imageURL={user.photoURL}
          selfName={user.displayName}
        ></Header>
        <SearchBox></SearchBox>
        <div className="search_items"></div>
        <div className="search__searchItems">
          {/* {searchResults &&
            searchResults?.map(({ id, data: { name, photoURL } }) => {
              <ChatList
                key={id}
                imageURL={photoURL}
                chatName={name}
              ></ChatList>;
            })} */}
        </div>
        <div className="chat_list_container">
          {searchResults?.map(({ id, data: { name, photoURL } }) => (
            <ChatList
              key={id}
              id={id}
              imageURL={photoURL}
              chatName={name}
            ></ChatList>
          ))}
          {chats?.docs.map((chat) => (
            <ChatList
              key={chat.id}
              id={chat.id}
              imageURL={chat.photoURL}
              chatName={chat.data().name}
              timestamp={"6:54 pm"}
              lastMessage={
                "Hellodsfasdfjkajsdlfkajsldkfjlaskdfjaksdjflkasdjlfkasjdlfkasjdlfksdafsdfasdf"
              }
            ></ChatList>
          ))}
          {/* <ChatList
            imageURL={
              "https://pps.whatsapp.net/v/t61.24694-24/156606516_223405766360003_6135443148643623556_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQhQbDkZgf65dzn3J_5pBejETdf8JhNHTG5E1d_J5NHew&oe=63F49FB8"
            }
            chatName={"Sushant Barje"}
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
          ></ChatList> */}
        </div>
      </div>
      <div className="appBody__right">
        <Header
          whichHeader={"header__right"}
          menuOptions={[<SearchIcon />, <MoreVertIcon />]}
          imageURL={
            "https://pps.whatsapp.net/v/t61.24694-24/156606516_223405766360003_6135443148643623556_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_AdQhQbDkZgf65dzn3J_5pBejETdf8JhNHTG5E1d_J5NHew&oe=63F49FB8"
          }
          chatName={chatDetails?.data()?.name}
        ></Header>
        <ChatBox></ChatBox>
        <div className="input_box">
          <IconButton className="input_chat_option">
            <InsertEmoticonIcon></InsertEmoticonIcon>
          </IconButton>
          <IconButton className="input_chat_option">
            <AttachFileIcon></AttachFileIcon>
          </IconButton>
          <form onSubmit={handleSubmit(sendMessage)}>
            <input
              name="message"
              type="text"
              defaultValue=""
              {...register("message", { required: true })}
              placeholder="Type a message"
            />
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

import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./Header.css";
import GroupsIcon from "@mui/icons-material/Groups";
import IconButton from "@mui/material/IconButton";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import { auth, storage, db } from "../../firebase";
import { signOut, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUserData } from "../../features/userSlice";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { updateDoc, doc } from "firebase/firestore";

const Header = ({ menuOptions, imageURL, chatName, whichHeader, selfName }) => {
  const menuRef = useRef();
  const [leftHeaderPicClick, setLeftHeaderPicClick] = useState(false);
  const [profilePicFile, setProfilePicFile] = useState("");
  const user = useSelector(selectUserData);
  console.log(selfName);
  useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (
        leftHeaderPicClick &&
        menuRef.current &&
        !menuRef.current.contains(e.target)
      ) {
        setLeftHeaderPicClick(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickOutside);
    };
  }, [leftHeaderPicClick]);

  useEffect(() => {
    if (!profilePicFile) {
      console.log("no profile pic");
      return;
    }
    const storageRef = ref(storage, `/files/${profilePicFile.name}`);

    const uploadTask = uploadBytesResumable(storageRef, profilePicFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log(snapshot);
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          const docRef = doc(db, "users", user.email);
          const resultRef = await updateDoc(docRef, {
            imageURL: url,
          });
          updateProfile(auth.currentUser, {
            photoURL: url,
          })
            .then(() => {
              console.log("Profile uploaded");
            })
            .catch((error) => {
              console.error(error);
            });
        });
      }
    );
  }, [profilePicFile]);

  const dispatch = useDispatch();

  const changeProfilePic = () => {
    console.log("hello");
  };
  const signout = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out");
        dispatch(logout(null));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const MenuOptionsDisplay = (menuOptions) => {
    return menuOptions.map((menuOption, index) => (
      <IconButton key={index} className="header__option">
        {menuOption}
      </IconButton>
    ));
  };
  return (
    <div className="Header">
      <div className="header_profileSection">
        <div className="header__profileSection_menu">
          <Avatar
            onClick={() => setLeftHeaderPicClick((prev) => !prev)}
            sx={{ width: 40, height: 40 }}
            src={imageURL}
          />
          {whichHeader == "header__left" && leftHeaderPicClick && (
            <div className="header__left__profile__menu" ref={menuRef}>
              <h3 className="">{selfName}</h3>
              <input
                type="file"
                name="profile_pic"
                id="profile_pic"
                onChange={(e) => {
                  setProfilePicFile(e.target.files[0]);
                }}
                style={{ display: "none" }}
              />
              <label
                htmlFor="profile_pic"
                className="header__left__change_profile_pic"
              >
                Change Profile Picture
              </label>
              <p onClick={signout} className="header__left__logout">
                Log Out
              </p>
            </div>
          )}
        </div>

        <h3>{chatName}</h3>
      </div>
      <div className="headerLeft__box">{MenuOptionsDisplay(menuOptions)}</div>
    </div>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;

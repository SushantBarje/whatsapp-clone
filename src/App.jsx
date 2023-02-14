import { useState } from "react";
import "./App.css";
import AppBody from "./components/AppBody/AppBody";
import Layout from "./components/Layout/Layout";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUserData } from "./features/userSlice";

function App() {
  const [user, setUser] = useState(false);
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  // console.log(user);
  onAuthStateChanged(auth, (userCredentials) => {
    if (userCredentials) {
      console.log("User logged in");
      console.log(userCredentials);
      // dispatch(
      //   login({
      //     email: userCredentials.email,
      //     displayName: userCredentials.displayName,
      //     id: userCredentials.uid,
      //     photoURL: userCredentials.photoURL,
      //   })
      // );
      setUser(true);
    } else {
      console.log("user signed off");
    }
  });

  return (
    <div className="app">
      {!user ? (
        <Layout></Layout>
      ) : (
        <>
          <div className="box-1"></div>
          <div className="box-2"></div>
          <AppBody></AppBody>
        </>
      )}
    </div>
  );
}

export default App;

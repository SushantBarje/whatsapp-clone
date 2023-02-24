import { useEffect, useState } from "react";
import "./App.css";
import AppBody from "./components/AppBody/AppBody";
import Layout from "./components/Layout/Layout";
import CancelIcon from "@mui/icons-material/Cancel";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUserData } from "./features/userSlice";
import { getErrorDetails, resetErrorDetails } from "./features/errorSlice";

function App() {
  const [user, setUser] = useState(false);
  const userData = useSelector(selectUserData);
  const errorData = useSelector(getErrorDetails);
  const dispatch = useDispatch();
  // console.log(user);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userCredentials) => {
      if (userCredentials) {
        // console.log("User logged in");
        // console.log(userCredentials);
        dispatch(
          login({
            email: userCredentials.email,
            displayName: userCredentials.displayName,
            id: userCredentials.uid,
            photoURL: userCredentials.photoURL,
          })
        );
        setUser(true);
      } else {
        console.log("user signed off");
      }
    });
  }, []);
  // console.log(userData?.user === undefined);
  // console.log(userData === null);
  // console.log(userData?.user);
  // console.log(userData);
  console.log(errorData);
  return (
    <div className="app">
      {userData === null ? (
        <Layout></Layout>
      ) : (
        <>
          <div className="box-1"></div>
          <div className="box-2"></div>
          <AppBody></AppBody>
        </>
      )}
      {errorData && (
        <div className="error__body">
          <p className="error__text">{errorData.errorMessage}</p>

          <CancelIcon
            onClick={() => {
              dispatch(resetErrorDetails());
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;

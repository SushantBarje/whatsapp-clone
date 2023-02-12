import { useState } from "react";
import "./App.css";
import AppBody from "./components/AppBody/AppBody";
import Layout from "./components/Layout/Layout";

function App() {
  const [user, setUser] = useState(false);
  console.log(user);
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

import { useState } from "react";
import "./App.css";
import AppBody from "./components/AppBody/AppBody";

function App() {
  return (
    <div className="app">
      <div className="box-1"></div>
      <div className="box-2"></div>
      <AppBody></AppBody>
    </div>
  );
}

export default App;

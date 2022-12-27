import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("text-dark");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setText("text-dark");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      setText("text-light");
      document.body.style.backgroundColor = "#042743";
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        text={text}
      />
      <div className="container">
        <TextForm heading="Enter Your Text To Analyze" mode={mode} />
      </div>
    </>
  );
}

export default App;

import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alerts from "./components/Alerts";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("text-dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      setText("text-dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    } else {
      setMode("dark");
      setText("text-light");
      document.body.style.backgroundColor = "#042743";
      showAlert("Light Dark has been enabled", "success");
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
      <Alerts alert={alert} />
      <div className="container">
        <TextForm
          showAlert={showAlert}
          heading="Enter Your Text To Analyze"
          mode={mode}
        />
      </div>
    </>
  );
}

export default App;

import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alerts from "./components/Alerts";
import About from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
    }, 2000);
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
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
          text={text}
        />
        <Alerts alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter Your Text To Analyze"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

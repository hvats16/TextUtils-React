import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerCaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnCHange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="conatiner">
        <h1 className="my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
            }}
            className="form-control"
            value={text}
            id="myBox"
            rows={"8"}
            onChange={handleOnCHange}></textarea>
        </div>
        <button
          className="btn btn-primary mx-1"
          onClick={handleUpperCaseClick}
          style={{ backgroundColor: props.mode === "light" ? "" : "	#696969" }}>
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleLowerCaseClick}
          style={{ backgroundColor: props.mode === "light" ? "" : "	#696969" }}>
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={clearText}
          style={{ backgroundColor: props.mode === "light" ? "" : "	#696969" }}>
          Clear Text
        </button>
        <button
          className="btn btn-primary mx-1"
          onClick={handleCopy}
          style={{ backgroundColor: props.mode === "light" ? "" : "	#696969" }}>
          Copy Text
        </button>
      </div>
      <div className="conatiner my-3">
        <h2 style={{ color: props.mode === "light" ? "black" : "white" }}>
          Your Text After Analyzing
        </h2>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          Number of Words - {text.length > 0 ? text.split(" ").length : 0}
        </p>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          Number of Charcter - {text.length}{" "}
        </p>
        <h3 style={{ color: props.mode === "light" ? "black" : "white" }}>
          Preview
        </h3>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {text.length > 0 ? text : "Enter something in the textbox above"}
        </p>
      </div>
    </>
  );
}

TextForm.protoType = {
  heading: PropTypes.string.isRequired,
};

TextForm.defaultProps = {
  heading: "Enter Your Text To Analyze",
};

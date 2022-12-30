import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUpperCaseClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };
  const handleLowerCaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };
  const handleOnCHange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div className="conatiner">
        <h1 className="my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#13466e",
            }}
            className="form-control"
            value={text}
            id="myBox"
            rows={"8"}
            onChange={handleOnCHange}></textarea>
        </div>
        <button
          disabled = {text.length===0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpperCaseClick}
          style={{ backgroundColor: props.mode === "light" ? "" : "	#696969" }}>
          Convert to UpperCase
        </button>
        <button
        disabled = {text.length===0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLowerCaseClick}
          style={{ backgroundColor: props.mode === "light" ? "" : "	#696969" }}>
          Convert to LowerCase
        </button>
        <button
        disabled = {text.length===0}
          className="btn btn-primary mx-1 my-1"
          onClick={clearText}
          style={{ backgroundColor: props.mode === "light" ? "" : "	#696969" }}>
          Clear Text
        </button>
        <button
        disabled = {text.length===0}
          className="btn btn-primary mx-1 my-1"
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
          Number of Words - {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}
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

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

  const [text, setText] = useState("Enter Your Test");
  return (
    <>
      <div className="conatiner">
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows={"8"}
            onChange={handleOnCHange}></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperCaseClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCaseClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={clearText}>
          Clear Text
        </button>
      </div>
      <div className="conatiner my-3">
        <h2>Your Text After Analyzing</h2>
        <p>Number of Words - {text.split(" ").length}</p>
        <p>Number of Charcter - {text.length} </p>
        <h3>Preview</h3>
        <p>{text}</p>
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

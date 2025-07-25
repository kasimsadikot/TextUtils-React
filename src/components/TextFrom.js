import React, { useState } from "react";

export default function TextFrom(props) {
  const handleonchange = (event) => {
    // console.log("On Changed");
    setText(event.target.value);
  };
  const handleUpclick = () => {
    // console.log("UpperCase Was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase","success :");
  };
  const handleloclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase","success :");
  };
  const [text, setText] = useState("");
  return (
    <div className="main-container" style={{backgroundColor :props.mode === 'dark'?'#042743':'white'}}>
      <div className="container"  style={{color : props.mode === 'dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            onChange={handleonchange}
            style={{color:props.mode === 'dark'?'white':'#042743',backgroundColor : props.mode === 'dark'?'#042743':'white'}}
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloclick}>
          Convert To LowerCase
        </button>
      </div>
      <div className="container my-3" style={{color : props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

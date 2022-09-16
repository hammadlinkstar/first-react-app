import React, { useState } from 'react'

export default function TextForm(props) {
    const [text,setText] = useState("Enter Text Here");
    const handleUpClick = ()=> {
        console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText )
    }
    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText )
    }
    const handleOnChange = (event)=>{
        console.log("Change");
        setText(event.target.value);
    }
    // setText("New Text");
  return (
    <>
    <div>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
    </div>
    <div className="container">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>

    </div>
</>
  )
}

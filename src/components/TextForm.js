import React,{useState} from 'react'


import Alert from './Alert';
import App from '../App';
export default function TextForm(Props) {
    const handleUpClick=()=>{
        console.log("clicked");
        let newText=text.toUpperCase();
        console.log(newText);
        setText(newText);
        Props.showAlert("Converted to uppercse","success");
        
        
    };
    const handleToClick=()=>{
        console.log("clicked");
        let newText=text.toLowerCase();
        console.log(newText);
        setText(newText);
        Props.showAlert("Converted to lowerCase","success");

    };
    const handleClearClick=()=>{
        console.log("clear");

        
        setText("");
        Props.showAlert("Cleared","success");
    };
    const handleOnChange=(event)=>{
        console.log("changed");
        setText(event.target.value);
    }
    const handleCopy=()=>{
        console.log("copied");
        var text=document.getElementById("exampleFormControlTextarea1").innerHTML;
        console.log(text);
        navigator.clipboard.writeText(text);
        Props.showAlert("Copied To clipboard","sucess");
        
        // navigator.clipboard.writeText(event.target.value);
    }

    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      Props.showAlert("EXtra spaces removed","success");
    }
    const [text,setText]=useState('Enter the text');
    const  colorchange=(color)=>{
      if( document.body.style.backgroundColor==="white")
   
      document.body.style.backgroundColor=color;
      else
      document.body.style.backgroundColor="white";
    }
    
  return (
    <>
    <div className="container">
    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>{Props.title}</h1></label>
    <button class="btn btn-primary mx-3 mt-3" onClick={() => colorchange("blue")}>Blue</button>
    <button class="btn btn-secondary mx-3 mt-3" onClick={() => colorchange("grey")}>Grey</button>
    <button class="btn btn-success mx-3 mt-3" onClick={() => colorchange("green")}>Green</button>
    <button class="btn btn-danger mx-3 mt-3" onClick={() => colorchange("red")}>Red</button>
  

  <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} rows="3" value={text}></textarea>
  <button className="btn btn-primary mx-3 mt-3 " onClick={handleUpClick}> Convert To UpperCase</button>
  <button className="btn btn-primary mx-3 mt-3" onClick={handleToClick}> Convert To Lowercase</button>
  <button className="btn btn-primary mx-3 mt-3" onClick={handleClearClick}> Clear</button> 
  <button className="btn btn-primary mx-3 mt-3" onClick={handleCopy}>Copy</button>
  <button className="btn btn-primary mx-3 mt-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button></div>
  
  
    <div className="container my-3">
        <h1>Your text Summary</h1>
            <p> {(text.split(" ")).length} words,{text.length} characters</p>
            <p>{0.008*(text.split(" ")).length} Minutes </p>
            <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>

    </>
  )
}

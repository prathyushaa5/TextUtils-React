import React ,{useState} from 'react'

export default function Password() {

const handleOnChange = (event)=>{
 console.log("changed");
  setText(event.target.value);
}
const handleOnClick=()=>{
  let newText=text;
  console.log(newText);
  if(text==="Password not entered"){
    alert("PLEASE ENTER PASSWORD");
  }
}
    const [text,setText]=useState("Password not entered");

  return (
   <>
   <div className="container my-5">
   <label htmlFor="inputPassword5" className="form-label">Password</label>
<input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" onChange={handleOnChange}/>
<div id="passwordHelpBlock" className="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
  <button className="btn btn-primary ml-3" onClick={handleOnClick}>enter</button>
</div>
</div>
   </>
  )
}

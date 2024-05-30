import React ,{useState} from 'react'

export default function About(props) {

    
    // const [style,setmyStyle]=useState({
    //     color:"white",
    //     backgroundColor:"black",
    //     border:"2px solid white"
    // })
    
    // const [btntext,setbtnText]=useState("Enable dark mode");
    // let toggleStyle=()=>{
    //     if(style.color==="white"){
    //         setmyStyle(
    //             {
    //                 color:"black",
    //     backgroundColor:"white",
    //     border:"2px solid black"
    //             }
            
    //         )
    //         setbtnText("Enable dark mode");
           
    //     }
    //     else{
    //         setmyStyle(
    //             {
    //         color:"white",
    //         backgroundColor:"black",
    //         border:"2px solid white"
    //     })
    //     setbtnText("Enable light mode");
    


    let mystyle={
      color:props.mode==='dark'?'white':'darkcyan',
      backgroundColor:props.mode==='dark'?'darkcyan':'white',
      border:'1px solid ',
      borderColor:props.mode==='dark'?'dwhite':'darkcyan'

    }
  return (
    <div className="container">  
    <h1>ABout Us</h1><div className="accordion" id="accordionExample" style={mystyle}>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={mystyle} aria-expanded="true" aria-controls="collapseOne">
          Science
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse " style={mystyle} data-bs-parent="#accordionExample">
        <div className="accordion-body" style={mystyle}>
          <strong>This is science subject.</strong> 
        </div>
      </div>
    </div>
    <div className="accordion-item" style={mystyle}>
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Maths
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is the Maths.</strong>
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Hindi
        </button>
      </h2>
      <div id="collapseThree" style={mystyle} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is Hindi.</strong> 
        </div>
      </div>
    </div>
    <button className="btn btn-primary mx-3 my-3">hello</button>
  </div>
  </div>
    
  )
}

import React ,{useState} from 'react'

export default function About() {
    
    const [style,setmyStyle]=useState({
        color:"white",
        backgroundColor:"black",
        border:"2px solid white"
    })
    const [btntext,setbtnText]=useState("Enable dark mode");
    let toggleStyle=()=>{
        if(style.color==="white"){
            setmyStyle(
                {
                    color:"black",
        backgroundColor:"white",
        border:"2px solid black"
                }
            
            )
            setbtnText("Enable dark mode");
           
        }
        else{
            setmyStyle(
                {
            color:"white",
            backgroundColor:"black",
            border:"2px solid white"
        })
        setbtnText("Enable light mode");
    }}
  return (
    <>  <div className="accordion" id="accordionExample" style={style}>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" style={style} aria-expanded="true" aria-controls="collapseOne">
          Accordion Item #1
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" style={style} data-bs-parent="#accordionExample">
        <div className="accordion-body" style={style}>
          <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item" style={style}>
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Accordion Item #2
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Accordion Item #3
        </button>
      </h2>
      <div id="collapseThree" style={style} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
      </div>
    </div>
    <button className="btn btn-primary mx-3 my-3" onClick={toggleStyle}>{btntext}</button>
  </div>
  </>
    
  )
}

import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


import React,{useState} from 'react';
import About from './components/About';
function App() {
  const [mode,setMode]=useState('light');
  const [textMode,setTextMode]=useState('dark');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    });
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  const removeBodyClasses=()=>{
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-secondary');
  document.body.classList.remove('bg-primary');
  }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
     if(mode==='light'){
      setMode("dark");
      setTextMode("light");
      showAlert("Dark mode has been activated","success");
      document.body.style.backgroundColor=cls;
      document.body.style.color="white"
      setInterval(()=>{  document.title="DARK MODE"},1500)
    
     }
     else{
      setMode("light");
      setTextMode("dark");
      showAlert("Light mode has been alerted","success");
      document.body.style.backgroundColor='white';
      document.body.style.color="black";
      setInterval(()=>{  document.title="WHITE MODE"},1500)
    
    }
     }
  
 
  return (

    <>
    
    <Navbar title="TextUTils" textMode={textMode} mode={mode} toggleMode={toggleMode}about="About"/>
    <Alert alert={alert}></Alert>
   <div className='container my-3'>
     
    <div className='container'> <TextForm title="Enter the text" showAlert={showAlert} ></TextForm></div> 
        
   
   
     
  
   </div>


    </>
   
    
  );
}

export default App;

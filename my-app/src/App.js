// import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';
import React, { useState } from 'react';
// step 1
function App(props) {
  // set alert start
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) =>
  {
       setAlert({
          msg : message,
          type : type
       })

       setTimeout(()=>{
            setAlert(null);
       }, 4000);
  }
  // set alert end

  // enable dark mode start
  const [mode, setmode] = useState("light")
  const enablemode = ()=>
  {
    if(mode === "light")
    {
      setmode("dark");
      document.body.style.backgroundColor = "cadetblue";
      document.getElementById('textarea').style.backgroundColor = "cadetblue";
      showAlert(" Dark mode is enabled","Success : ")
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.getElementById('textarea').style.backgroundColor = "white";
      showAlert(" white mode is enabled","Success : ")

    }
  }
  // enable dark mode end

  return (
    <>
      {/* <Navbar title = "TextUtils" about = "About Us" blog = "Blog"/> */}
      <Navbar blog = "Blog" title= "TextUtils" about = "About" mode = {mode} enablemode = {enablemode}/>
      <Alert alert = {alert}/>
      <Textarea heading = "Enter Your Text Here" />

    </>
  );
}

export default App;


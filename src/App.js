import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';   
import Alert from './components/Alert';
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light');
  const [green,setGreen]=useState('lightgreen');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 30000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode has been enabled","warning");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  const turnGreen=()=>{
    if(green==='green'){
      setGreen('lightgreen');
      document.body.style.backgroundColor='lightgreen';
      showAlert("Light green mode has been enabled","success");
    }
    else{
      setGreen('green');
      document.body.style.backgroundColor='green';
      showAlert("Green mode has been enabled","success");
    }
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils" about="About" home="Home" mode={mode} green={green} turnGreen={turnGreen} toggleMode={toggleMode} showAlert={showAlert} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm title="Enter the text for conversion:" mode={mode} showAlert={showAlert} />
        <About />
        {/* <Routes>
          <Route exact path="/" element={<TextForm title="Enter the text for conversion:" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
        </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;

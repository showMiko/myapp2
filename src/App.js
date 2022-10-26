// import logo from './logo.svg';
// import './App.css';
import { useState } from "react";
// import Alert from "./components/Alert";
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm";
// import React from 'react';
import AboutPage from "./components/AboutPage";
import * as React from 'react';
import About from "./components/About";
import { ReactDOM } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const [alert, setalert] = useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
  }

  const toggleMode=()=>{
    if(mode==='light'){
    setMode('dark');
      document.body.style.backgroundColor='#495057'
    showAlert("Dark Mode Has been Enabled","success");
  }
    else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Light Mode Has been Enabled","success");
  }
  }

  return (
    <Router>

    <div className="App"> 
      <Navbar title="TextUtils" FaceBook="FaceBook" Dropdown="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<AboutPage/>}></Route>
          <Route exact path="/" element={<TextForm heading="Enter the text to Analyze" mode={mode} />}>
          </Route>
      </Routes>

      {/* <Alert Alert={alert}/> */}
      </div>
    </div>
    </Router>
  );
}

export default App;

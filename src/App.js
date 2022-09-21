import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js";
import TextFrom from "./components/TextForm";
import About from './components/About';
let name="Vaibhav Mahajan"


function App() {
  const [ mode , setMode ]=useState('dark');
  const toggleMode=()=>{
    if(mode=='light')
    {
      setMode('dark')
    }
    else
    {
      setMode('light')
    }
  }
  return (
    <>
<Navbar title="TextUtils" about="About" toggleMode={toggleMode} mode={mode}/>
<div className="container my-3" >
<About></About>    
<TextFrom heading="Text Box" />
</div>

    </>
  );
}

export default App;

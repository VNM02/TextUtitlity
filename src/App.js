import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js";
import TextFrom from "./components/TextForm";
import About from './components/About';
import Alert from "./components/Alert.js" ;
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
let name="Vaibhav Mahajan"


function App() {
  const [ mode , setMode ]=useState('dark');
  const[alert,setAlert]=useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      showAlert("Dark mode enabled","success");
      // document.body.style.backgroundColor='grey';
      document.title='TextUtils- Dark Mode';
    }
    else
    {
      setMode('light')
     // document.body.style.backgroundColor='light';
      showAlert("Normal mode enabled","success")
      document.title='TextUtils- Light Mode';
    }
  }
  
  return (
    <>
    <Router>
    <Navbar title="TextUtils" about="About" toggleMode={toggleMode} mode={mode}/>
<Alert alert={alert}/>
<div className="container my-3" >
{/* <About></About>     */}

<Switch>
          <Route exact path="/about">
            <About />
          </Route>
          
          <Route eaxct path="/">
          <TextFrom heading="Text Box" mode={mode} showAlert={showAlert} />
          </Route>

        </Switch>

          
          

    </div>
    </Router>
    </>
  );
}

export default App;

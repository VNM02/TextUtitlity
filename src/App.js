import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js";
import TextFrom from "./components/TextForm";
import About from './components/About';
import Alert from "./components/Alert.js" ;
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
    }
    else
    {
      setMode('light')
     // document.body.style.backgroundColor='light';
      showAlert("Normal mode enabled","success")
    }
  }
  
  return (
    <>
<Navbar title="TextUtils" about="About" toggleMode={toggleMode} mode={mode}/>
<Alert alert={alert}/>
<div className="container my-3" >
{/* <About></About>     */}
<TextFrom heading="Text Box" mode={mode} showAlert={showAlert} />
</div>

    </>
  );
}

export default App;

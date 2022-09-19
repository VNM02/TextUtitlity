import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar.js";
import TextFrom from "./components/TextForm";
import About from './components/About';
let name="Vaibhav Mahajan"
function App() {
  return (
    <>
<Navbar title="TextUtils" about="About"/>
<div className="container my-3" >
<About></About>    
<TextFrom heading="Text Box" />
</div>

    </>
  );
}

export default App;

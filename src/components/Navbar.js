import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import About from './About.js'

export default function Navbar(props) {
  return (

		   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">{props.about}</a>
      </li>
	  
    </ul>
    
 
  
    </div>
    <div className={`form-check form-switch my-2 my-sm-0 text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>

     </div>
    {
    /* <form classNamename="form-inline my-2 my-lg-0 myb-3">
		<style></style>
      <input classNamename="form-control mr-sm-2 myb-3" type="search" placeholder="Search" aria-label="Search"></input>
	  
	  <button classNamename="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
	 
     
    </form> */
    } 
  </div>
</nav>
	  
	
  )
}

Navbar.propTypes={                                 //Setting the datatypes of the property elements it is not a compulsory step
	title:PropTypes.string,						               // Now title can be only a string 
	about:PropTypes.string
}
/*
Navbar.defaultProps={
	title:"Set Title Here"
	about:"Write about here"
} 
// style={{color: props.mode==='dark'?'white':'black'}} */
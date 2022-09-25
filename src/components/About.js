import React, {useState} from 'react'

export default function About() {
	const [myStyle,setMyStyle]=useState(
		{
			color:'white',
			backgroundColor:'black'
		}
	)
	const [myStyleBtn,setMyStyleBtn]=useState(                       /* State change for button*/
		{
			color:'black',
			backgroundColor:'white'
		}
	)
	const [Btntext,setBtntext]=useState('Enable Dark Mode')            /* State change for the text inside the button */
	const toggleStyle=()=>{
		if(myStyle.color==='white')
		{
			setMyStyle({
				color:'black',
			backgroundColor:'white'
			})
			setMyStyleBtn({
				color:'white',
				backgroundColor:'black'
			})
			setBtntext("Enable Light Mode")
		}
		else
		{
			setMyStyle({
				color:'white',
				backgroundColor:'black'
			})
			setMyStyleBtn({
				color:'black',
			backgroundColor:'white'
			})
			setBtntext("Enable Dark Mode")
		}
	}
  return (
	<>
	<div classNameName="container my-3"  style={myStyle}> 
		<h3>About Us</h3>
		<div className="accordion" style={myStyle} id="accordionExample">
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       Analyze Your Text
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       Text Utils gives you a way to analyze your text quickly and efficiently . Be it word count or character count.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       Text utils is a free character counter tool that provides instant character and word count statistics for a given paragraph.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This word counter tool is compatible with any of the existing browser such as Chrome,brave,etc.
      </div>
    </div>
  </div>
</div>


	</div>
	<div classNameName="container my-3">
<button type="button" onClick={toggleStyle} style={myStyleBtn} classNameName="btn btn-primary my-3">{Btntext}</button>
</div>
	</>
  )
}

import React , {useState} from 'react'


export default function TextForm(props) {
	const ChangeToUp= ()=> {                               // On click changes the entered text touppercase
		console.log("Button Was Clicked")
		let newText=text.toUpperCase();
		setText(newText)
	}
	const ChangedText= (event) =>{                          // Shows whatever text is entered in the text box
		console.log("Changed");
		setText(event.target.value)
	}
	const [text, setText] = useState('Enter The Text Here');
  return (
	<div>
	 <h1>{props.heading}</h1>
  <div className="mb-3">
    {/* <label for="myBox">{props.heading}</label> */}
    <textarea className="form-control" value={text} onChange={ChangedText} id="myBox" rows="8"></textarea>
  </div>
	<button className="btn btn-primary" onClick={ChangeToUp}>Convert To UpperCase</button>
	</div>
  )
}

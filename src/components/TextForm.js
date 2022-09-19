import React , {useState} from 'react'


export default function TextForm(props) {
	const ChangeToUp= ()=> {                               // On click changes the entered text touppercase
		console.log("Button Was Clicked")
		let newText=text.toUpperCase();
		setText(newText)
	}
	const ChangeToDown= ()=> {                               // On click changes the entered text tolowercase
		console.log("Button Was Clicked")
		let newText=text.toLowerCase();
		setText(newText)
	}
	const ClearText= ()=> {                               // On click clears
		console.log("Button Was Clicked")
		let newText='';
		setText(newText)
	}
	const TrimText= ()=> {                               // On click changes trims the text
		console.log("Button Was Clicked")
		let newText=text.trim();
		setText(newText)
	}
	const ChangedText= (event) =>{                          // Shows whatever text is entered in the text box
		console.log("Changed");
		setText(event.target.value)           // text=settext              // this implies that whatever text is entered in the textbox is saved in the text  variable
	}
	const [text, setText] = useState('Enter The Text Here');
  return (
	<>
	<div className="container">
	 <h1>{props.heading}</h1>
  <div className="mb-3">
    {/* <label for="myBox">{props.heading}</label> */}
    <textarea className="form-control" value={text} onChange={ChangedText} id="myBox" rows="8"></textarea>
  </div>
	<button className="btn btn-primary mx-2" onClick={ChangeToUp}>Convert To UpperCase</button>
	<button className="btn btn-primary mx-2" onClick={ChangeToDown}>Convert To LowerCase</button>
	<button className="btn btn-primary mx-2" onClick={TrimText}>Trim the paragraph</button>
	<button className="btn btn-primary mx-2" onClick={ClearText}>Clear the paragraph</button>
	</div>
	<div className="container my-3">
		<h1>Text Summary</h1>
		<p>The entered paragraph has {text.split(" ").length} words and {text.length} characters</p>    {/* /// {text.split()} == it is an array */}
		<p>{0.008 * text.split(" ").length} are the minutes required to read the full text</p>
	</div>
	</>
  )
}

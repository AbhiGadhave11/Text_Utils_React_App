import React,{useState} from 'react'




export default function TextForm(props) {
    
    const handleOnChange = (event)=>{
        console.log("On Change")
        setText(event.target.value)
        
    }

    const HandleUpClick = ()=>{
        // console.log("Upper Case Button is Clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const HandleClearClick = ()=>{
        // console.log("Upper Case Button is Clicked" + text)
        let newText = '';
        setText(newText)
    }


    const HandleLoClick = ()=>{
        console.log("Upper Case Button is Clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    const [text,setText] = useState("Enter text Here")
    return (
        <>
            <div className="container my-2" style={{color : props.mode ==='dark'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="input-group">
                    <span className="input-group-text" style={{backgroundColor : props.mode ==='light'?'grey':'white'}}>Example TextArea</span>
                    <textarea className="form-control" value={text} style={{backgroundColor : props.mode ==='light'?'grey':'white'}} onChange={handleOnChange} aria-label="With textarea" rows={8} ></textarea>
                </div>
                <div className="container my-3">
                    <button className="btn btn-primary mx-2" onClick={HandleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-2" onClick={HandleLoClick}>Convert to LowerCase</button>
                    <button className="btn btn-primary mx-2" onClick={HandleClearClick}>Clear A Text</button>
                </div>
            </div>
            <div className="container my-2" style={{color : props.mode ==='dark'?'black':'white'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} Words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
            </div>
        </>
    )
}

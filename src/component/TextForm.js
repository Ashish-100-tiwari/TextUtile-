import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upper case","success");
    }
    const handleloClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lower case","success");
    }
    const clearClick = ()=>{
        let newText = "";
        setText(newText)
        props.showAlert("your text is clear ","danger");
    }
   
    const handleCopy = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("your text is copy  ","success");
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState(' ');
    return (
        <>
        <div className ="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode ==='dark'?'#acb3b894':'white',color: props.mode === 'dark'?'white':'black' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to Uppercase </button>
        <button className="btn btn-primary mx-2" onClick={handleloClick} >Convert to Lowercase </button>
        <button className="btn btn-primary mx-2" onClick={clearClick} >Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy} >Copy Text</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2> your text summary</h2>
            <p>{text.split(" ").length} words {text.length}character </p>
            <p>{0.008*text.split(" ").length} Minutes to read </p>
            <h2>preview</h2>
            <p>{text.length>0?text:"Enter Somthing to preview"}</p>
        </div>
        </>
    )
}

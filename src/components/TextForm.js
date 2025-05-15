import React from 'react'
import { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUppercaseButton=()=>{
        console.log("Conerting "+text+" to uppercase");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");        
    };
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    };
    const handleLowercaseButton=()=>{
        console.log("Conerting "+text+" to lowercase");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");
    };
    const handleClear=()=>{
        console.log("Clearing all text");
        let newText="";
        setText(newText);
        props.showAlert("Cleared all text","success");
    };
    const handleCapitalizeButton=()=>{
        console.log("Conerting "+text+" to capitalize");
        let arr=text.split(" ");
        for(let i=0;i<arr.length;i++){
            arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1,arr[i].length).toLowerCase();
        }
        let newText=arr.join(" ");
        setText(newText);
        props.showAlert("Converted to capitalize","success");
    };
    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        console.log("Copying text: "+text);
        props.showAlert("Copied to clipboard","success");
    }
    let textCleaned=text.split(" ");
    textCleaned = textCleaned.filter(item => item !== "");
    return (
        <>
        <div className="container" style={props.mode==='light'?{color:'black'}:{color:'white'}}>        
            <h2>{props.title}</h2>
            <div className="mb-3">
                <textarea className="form-control" style={props.mode==='light'?{color: 'black',backgroundColor:'white'}:{color: 'white',backgroundColor:'grey'}} value={text} id="myBox" rows="7" onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-danger mx-4" onClick={handleUppercaseButton}>Convert to Uppercase</button>
            <button className="btn btn-success mx-4" onClick={handleLowercaseButton}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-4" onClick={handleCapitalizeButton}>Capitalize Each Word</button>
            <button className="btn btn-info mx-4" onClick={handleClear}>Clear All Text</button>
            <button className="btn btn-secondary mx-4" onClick={handleCopy}>Copy Text</button>

        </div>
        <div className="container my-4" style={props.mode==='light'?{color: 'black'}:{color: 'white'}}>
            <h3>Characters and Words in Entered Text</h3>
            <p>There are {text.length} characters</p>
            <p>There are {textCleaned.length} words</p>
            <p>Time taken to read on average: {0.08*text.split(" ").length} minutes</p>
        </div>
        </>
    )
}

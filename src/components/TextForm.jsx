import React, { useState } from 'react'
import About from './About';


export default function TextForm(props) {
    
    //Get the Text That is Currently Selected
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
    //Convert Text to Upper Case
    const handleUpClick=()=>{
        setText(text.toUpperCase())
    }

    //Convert Text to Lower Case
    const handleDownClick=()=>{
        setText(text.toLowerCase())
    }
    
    //Function to reset the Text box Field
    const clearText=()=>{
        setText("");
    }

    //Remove Extra Spaces
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    //Copy 
    const handleCopy=()=>{
        let sample=document.getElementById("exampleFormControlTextarea1");
        sample.select();
        navigator.clipboard.writeText(sample.value)
    }
    

    const [text, setText] = useState("");
    return (
        <div>
        <div className="container">
        {/* className={`text-${props.mode==='light'?'dark':'white'}`} */}

            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                    <h3 className={`text-${props.mode==='light'?'dark':'white'}`}>
                        {props.heading}
                    </h3>
                    <h6 className={`text-${props.mode==='light'?'dark':'white'}`}>Enter your Text</h6>
                </label>
                <textarea className={`form-control border-${props.mode==='light'?'primary':'white'} text-${props.mode==='light'?'dark':'white'}`} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.mode==='light'?'white':'#343a40' }} value={text} onChange={handleOnChange}></textarea>
                <button className={`btn border border-info border-${props.mode==='light'?'primary':'white'} my-2 text-${props.mode==='light'?'dark':'white'}` } onClick={handleUpClick}>Convert to UpperCase</button>
                <button className={`btn border border-warning border-${props.mode==='light'?'primary':'white'} mx-1 text-${props.mode==='light'?'dark':'white'}`} onClick={handleDownClick}>Convert to LowerCase</button>
                <button className={`btn border border-danger border-${props.mode==='light'?'primary':'white'} mx-1 text-${props.mode==='light'?'dark':'white'}`} onClick={clearText} >Clear Text</button>
                <button className={`btn border border-dark mx-1 border-${props.mode==='light'?'primary':'white'} text-${props.mode==='light'?'dark':'white'}`} onClick={handleCopy} >Copy</button>
                <button className={`btn border border-success border-${props.mode==='light'?'primary':'white'} mx-1 text-${props.mode==='light'?'dark':'white'}`} onClick={handleExtraSpaces} >Remove Extra Spaces</button>

            </div>
        </div>
        <div className="container">
            <h1 className={`text-${props.mode==='light'?'dark':'white'}`}>Your Text Summary</h1>
            <h3>
            <About text={text} preview="Preview Text" wCount={text.split(' ').length} cCount={text.length} timeToRead={0.008*text.split(' ').length}/>
            </h3>
        </div>
        </div>
    )
}
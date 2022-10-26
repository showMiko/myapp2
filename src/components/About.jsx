import { useState } from "react"
import React from 'react'
export default function About(props) {
    
    //Enable Dark Mode
    const [mystyle,setmystyle]=useState({
        color:"black",
        backgroundColor:"white"
    })
    const [btnText, setBtnText] = useState("Enable Dark Mode")

    const toggleStyle=()=>{
        if(mystyle.color==='white'){
            setmystyle({
                color:'Black',
                backgroundColor:"white",
                
            })
            setBtnText("Enable Dark Mode")
        }
        else
        {
            setmystyle({
                color:"white",
                backgroundColor:"#343a40",
                border:"1px solid white"
            })
            setBtnText("Enable Light Mode")
        }
    }


    return (
        <div>

            <div className="container" >
                <div class="accordion" id="accordionExample" >
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={mystyle}>
                                <h3>{props.preview} --&gt; Word Count:{props.wCount} Character Count: {props.cCount} Time To Read: {props.timeToRead} mins</h3>
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={mystyle}>
                                {props.text}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container my-2" >
            <button onClick={toggleStyle} className=" btn btn-primary">{btnText}</button>
            </div>
        </div>
    )
}
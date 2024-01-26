import React from "react"
import './Button.css'

interface ButtonProps{
    label:string;
}

const Button = (props:ButtonProps) => {
    return(
        <div className="container">
            <div className="btn"><a href="#">{props.label}</a></div>
        </div>
    )
}

export default Button;

import React from "react";
import './nav-head.css'


export const NavHead = (props)=>{
    return(
        <nav className="navbar">
            <ul className="navbar-nav">
                {props.children}
            </ul>
        </nav>
    )
}
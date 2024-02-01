import React, { ReactNode } from "react";
import './nav-head.scss'


interface item{
    children?:ReactNode,
    style?: React.CSSProperties,
}

export const NavHead = (props:item)=>{
    return(
        <nav className="navbar">
            <ul className="navbar-nav">
                {props.children}
            </ul>
        </nav>
    )
}
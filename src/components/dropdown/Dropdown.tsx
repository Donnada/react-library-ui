import React from "react";
import "./Dropdown.scss";
import { Navitems } from "./nav-item/nav-item";
import { Dropitem } from "./drop-item/drop-item";
import { NavHead } from "../narbar/nav-head/nav-head";


interface DropdownProps{
    styles?: 'simp' | 'github' |'ez'

}

export  const Dropdown=({
    styles='ez'
    
}:DropdownProps)=>{
    if(styles === 'ez'){
        return(
            <div className="dd-hw">
                <button>food</button>
                <div className="content">
                    <a href="">apple</a>
                    <a href="">bannan</a>
                    <a href="">西瓜</a>
                </div>
            </div>
        )
    }else if(styles ==='github'){
        return (
            <NavHead style={{ background: 'white' }}>
                <Navitems icon={<img src="/src/asset/white-blood-cell.png" />}>
                <Dropitem/>
                </Navitems>

            </NavHead>
            
        )

    }else{
        return (
            <div className="container">
                <nav className="navbar-drop">
                    <ul className="nav-links">
                        <li className="nav-link">
                            <a href="#">Home</a>
                        </li>
                        <li className="nav-link services">
                            <a href="#">Services
                            </a>
                            <ul className="drop-down">
                                <li className="nav-link">Service 1</li>
                                <li className="nav-link">Service 2</li>
                                <li className="nav-link">Service 3</li>
                            </ul>
                        </li>
                        <li className="nav-link">
                            <a href="#">About</a>
                        </li>
                        <li className="nav-link">
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

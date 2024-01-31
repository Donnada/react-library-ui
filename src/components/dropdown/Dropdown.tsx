import React from "react";
import "./Dropdown.css";
import {Narbar} from '../narbar/Narbar';

interface DropdownProps{
    styles?: 'hw' | 'github' |'ez'

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
            <Narbar styles="git"></Narbar>
        )

    }
}

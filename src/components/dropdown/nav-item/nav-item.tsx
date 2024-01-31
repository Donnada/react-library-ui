import React,{useState} from "react";
import './nav-item.css'

interface props{
    icon?:string,
}


export const Navitems = (items:props)=>{
    const [open,setopen] = useState(false);
    return(
        <li className="nav-item">
            <a href="" className="icon-button" onClick={()=>setopen(!open)}>{items.icon}</a>
            {open && items.children}
        </li>
    )
}

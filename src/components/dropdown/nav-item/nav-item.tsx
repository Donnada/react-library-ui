import React,{ReactNode, useState} from "react";
import './nav-item.scss'

interface props{
    icon?:ReactNode,
    children?:ReactNode,
}


export const Navitems = (items:props)=>{
    const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    
    setOpen((prevOpen) => !prevOpen);
    console.log('prevOpen')
  };
    return(
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={toggleOpen}>
                {items.icon}
                </a>
            {open && items.children}
        </li>
    )
}

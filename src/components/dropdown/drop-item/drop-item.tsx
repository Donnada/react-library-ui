import React from "react";
import './drop-item.css'


interface dropitem{

}


export const Dropitem  = ()=>{ 
    const Item = (props)=>{
        return (
            <a href="" className="menu-item">
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.leftIcon}</span>
            </a>
        );
    }
    return (
        <div className="drop">
            <Item>my profile</Item>
            <Item leftIcon={<img src="/src/asset/white-blood-cell.png"  />}>Settings</Item>
            {/* <Item rightIcon={<img src="/src/asset/white-blood-cell.png"   />}></Item> */}

        </div>
    )
    
}
import React from "react";


interface dropitem{

}


export const Dropitem  = ()=>{ 
    const item = (props)=>{
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
            <item>my profile</item>
            <item leftIcon={<img src="/src/asset/white-blood-cell.png"  />}></item>Settings
            <item rightIcon={<img src="/src/asset/white-blood-cell.png"   />}></item>

        </div>
    )
    
}
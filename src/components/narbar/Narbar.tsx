import React from "react";
import './Narbar.css'
import { Navitems } from "../dropdown/nav-item/nav-item";
import { NavHead } from "./nav-head/nav-head";



interface BaseNarbarProps{
    styles?: 'hw' | 'mhy' | 'git' 

}
export const Narbar = ({
    styles='hw',
    ...restProps
}:BaseNarbarProps) =>{
    if(styles==='hw'){
        return(
            <div className="container">
                <img className="logo" src="/src/asset/logo_app.png" alt="华为logo" />
                <nav>
                    <ul className="nav-hw">
                        <li ><a>华为</a></li>
                        <li ><a>鸿蒙智行</a></li>
                        <li ><a>华为智选</a></li>
                        <li ><a>生态周边</a></li>
                    </ul>
                </nav>
                <a href="#" className="cta"><button>contact</button></a>
            </div>
        );
    }else if(styles === 'git'){
        return (
            <NavHead>
                
                <Navitems icon={<img src="/src/asset/white-blood-cell.png"  alt='mySvgImage' />}/>
                <Navitems icon={<img src="/src/asset/white-blood-cell.png" alt='mySvgImage' />}/>
                <Navitems icon={<img src="/src/asset/white-blood-cell.png"  alt='mySvgImage' />}/>
                
            </NavHead>
            
        )
    };
}

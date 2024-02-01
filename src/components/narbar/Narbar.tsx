import React from "react";
import './Narbar.scss'
import { Navitems } from "../dropdown/nav-item/nav-item";
import { NavHead } from "./nav-head/nav-head";
import { Button } from "../Button/Button";



interface BaseNarbarProps{
    styles?: 'hw' | 'mhy' | 'git' 

}
export const Narbar = ({
    styles='mhy',
    ...restProps
}:BaseNarbarProps) =>{
    if(styles==='hw'){
        return(
            <div className="bontainer">
                <img className="logo" src="/src/asset/logo_app.png" alt="华为logo" />
                <nav>
                    <ul className="nav_hw">
                    {/* <Button
                        label="华为"
                        styles="btn-hw-nav"
                    />
                    <Button
                        label="鸿蒙智行"
                        styles="btn-hw-nav"
                    />
                    <Button
                        label="华为智选"
                        styles="btn-hw-nav"
                    />
                    <Button
                        label="生态周边"
                        styles="btn-hw-nav"
                    /> */}
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
    }else{

        return (
            <div className="container2">

            <nav className="listnav">
            <div className="left-section">
                    <img src="/src/asset/logo_app.png" alt="logo"/>
                </div>
                <div className="right-section">
                    <ul className="nav-links">
                        <li className="nav-link">
                            <a className='oa' href="#">Home</a>
                        </li>
                        <li className="nav-link">
                            <a className='oa' href="#">Services</a>
                        </li>
                        <li className="nav-link">
                            <a className='oa' href="#">About</a>
                        </li>
                        <li className="nav-link">
                            <a className='oa' href="#">Contact</a>
                        </li>
                    </ul>
                    <div className="action">
                        <button className="btn-login">Login</button>
                    </div>
                </div>
            </nav>
    </div>
        )
        
    }
}

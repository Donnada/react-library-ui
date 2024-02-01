import React, { useState,ReactNode } from "react";
import './drop-item.scss'
import {CSSTransition} from 'react-transition-group';


interface dropitem{
    leftIcon?:ReactNode;
    rightIcon?:ReactNode;
    children?:ReactNode;
    goToMenu?:string;

}


export const Dropitem  = (props:dropitem)=>{ 

    const [activeM,setActive] =  useState('main');
    const Item = (props:dropitem)=>{
        return (
            <a href="#" className="menu-item" onClick={()=>props.goToMenu && setActive(props.goToMenu)}>
                <span className="icon-button" >{props.leftIcon}</span>
                {props.children}
                <span className="icon-right" >{props.rightIcon}</span>
            </a>
        );
    }
    return (
        <div className="drop">
            <CSSTransition 
                    in={activeM === 'main'}
                    unmountOnExit
                    timeout={500}
                    classNames='menu-primary'>
                <div className="menu">
                    <Item >my profile</Item>
                    <Item 
                        leftIcon={<img src="/src/asset/white-blood-cell.png"/>}
                        rightIcon={<img src="/src/asset/white-blood-cell.png"/>}
                        goToMenu="settings"
                    >settings</Item>

                </div>
            </CSSTransition>


            <CSSTransition 
                    in={activeM === 'settings'}
                    unmountOnExit
                    timeout={500}
                    classNames='menu-secondary'>
                <div className="menu">
                    <Item goToMenu="main">return</Item>
                    <Item 
                        leftIcon={<img src="/src/asset/white-blood-cell.png"/>}
                        
                        
                    >settings</Item>

                </div>
            </CSSTransition>
           
        </div>
    )
    
}
import React from "react";
import './Narbar.css'

// export type ButtonSize = 'lg' | 'sm' | 'mid'
// export type NarbarType = 'hw' | 'mhy' | 'hgu' | 'sb'

// interface BaseNarbarProps{
//     disabled?:boolean
//     size?:ButtonSize
//     style?:NarbarType
// }


export default function Narbar(){
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
    )
}

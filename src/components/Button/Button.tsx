import React from "react"
import './Button.scss'

interface ButtonProps{
    /**
     * 标签名称
     */
    label:string;
    /**
     * 样式风格
     */
    styles?:'btn-hw-nav' | 'btn-mhy' | 'btn-hgu' | 'btn-o' | 'btn-hw-buy';
    /**
     * 背景颜色
     */
    backgroundColor?:string;
    /**
     * 尺寸
     */
    size?: 'sm' | 'med'| 'lg';
    /**
     * 链接
     */
    Tolink?:string;

}

export const Button = ({
    styles = 'btn-o' ,
    backgroundColor,
    label,
    size = 'med',
    ...props

}:ButtonProps) => {
        return(
            <div className={styles}
            style={{ backgroundColor}}
            
            {...props}
            ><a href={props.Tolink}>{label}</a></div>
        )
    
}



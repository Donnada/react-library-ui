import React from "react";
import './product-card.scss'

interface Card{
    /**
     * 样式
     */
    styles?:'ad',
    /**
     * 价格
     */
    price?:number,
    /**
     * 品牌
     */
    brand?:string;
    /**
     * 描述
     */
    des?:string;
    /**
     * 主题
     */
    tit?:string;
    /**
     * 购买语言
     */
    buy?:string;
    /**
     * 加入购物车
     */
    add?:string;
    /**
     * 图片路径
     */
    path?:string;
}


export const ProCard = (
    {   price=99,
        styles='ad',
        brand='NIKE',
        des='Running Shoes for Men (Black)',
        tit='Air Zoom Pegasus Flyease',
        buy='Buy Now',
        add='Add to Cart',
        path='/src/asset/product_image.png',

        ...props}
    :Card
)=>{
    if(styles === 'ad'){
        return (
            <div className="ProCard-container">
                <div className="product-card">
                    <div className="product-img">
                        <div className="bg-style">
                            <img src={path} alt="product_image"/>
                        </div>
                    </div>
                    <div className="product-content">
                        <div className="price"><span>${price}</span></div>
                        <div className="product-name">
                            <div className="brand-name">{brand}</div>
                            <div className="product-title">{tit}</div>
                            <div className="product-desc">
                                {des}
                            </div>
                        </div>
                        <div className="action-btn">
                            <button className="buy-now">{buy}</button>
                            <button className="add-to-cart">{add}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
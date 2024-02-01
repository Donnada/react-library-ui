import React from "react";
import './ProfileCard.scss'


interface Carditems{
    /**
     * 图片路径
     */
    path?:string;
    /**
     * 姓名
     */
    name?:string;
    /**
     * 账号
     */
    username?:string;
    /**
     * 职位
     */
    job?:string;
    /**
     * 社交媒体
     */
    medium1path?:string;


}


export const ProfileCard = (
    {   path='/src/asset/profileImage.png',
        name='Jane Doe',
        username='@janedoe07',
        job='Software Developer',

        
    }:Carditems
)=>{
    return (
        <div className="ProfileCard-container">
        <div className="profile">
            <img className="profile-img" src={path} alt="ProfileImage"/>
            <div className="profile-name">
                <p className="user-name">{name}</p>
                <p className="user-id">{username}</p>
            </div>
            <div className="profile-details">
                <div className="designation">{job}</div>
                <button className="btn-connect">Connect</button>
                <div className="social-connect">
                    <span>Follow:</span>
                    <span className="social-icons">
                        <img className='smimage' src="/src/asset/facebook.png" alt="fb"/>
                        <img className='smimage' src="/src/asset/instagram.png" alt="insta"/>
                        <img className='smimage' src="/src/asset/twitter.png" alt="twitter"/>
                    </span>
                </div>
                <button className="btn-view-more">View More</button>
            </div>
        </div>
    </div>
    )
}
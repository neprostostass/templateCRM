import React from 'react'
import s from '../Post/post.module.css'

import userLogo from '../../../../public/userLogo.png'

export default function Post({ message, likes }) {
    return (
        <div className={s.Post}>
            <div className={s.item}>
                <img src={userLogo} alt="userLogo" />
                <p>{message}</p>
                <p className={s.likes}>Likes: {likes}</p>
            </div>
        </div>
    );
}
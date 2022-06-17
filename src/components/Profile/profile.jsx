import React from 'react'
import ProfileInfo from './ProfileInfo/profileInfo';
import MyPostsContainer from './MyPosts/myPostsContainer';

import s from '../Profile/profile.module.css'

export default function Profile({ state, dispatch }) {

    return (
        <div className={s.content}>

            <ProfileInfo />

            <MyPostsContainer
            // state={state}
            // dispatch={dispatch}
            />

        </div>
    );
}
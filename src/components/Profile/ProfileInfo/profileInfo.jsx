import React from 'react'
import s from '../ProfileInfo/profileInfo.module.css'

export default function ProfileInfo() {

    return (
        <>
            <div className={s.photoProfile} />
            <div className={s.avaAndDescription}>
                ava + description
            </div>
        </>
    )
}
import React from 'react'
import s from '../Text/text.module.css'

export default function Text({ text }) {

    return (
        <>
            <div className={s.wrapper}>
                <p>{text}</p>
            </div>
        </>
    )
}
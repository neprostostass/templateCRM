import React from 'react'
import s from '../Header/header.module.css'
import headerLogo from '../../public/headerLogo.png'

export default function Header() {
    return (
        <div className='app-wrapper'>
            <div className={s.header}>
                <div className={s.headerLogo}>
                    <img src={headerLogo} alt="headerLogo" />
                </div>
            </div>
        </div>
    );
}
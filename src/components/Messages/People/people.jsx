import React from 'react'
import s from '../People/people.module.css'
import { NavLink } from 'react-router-dom';

export default function People({ id, name }) {

    let path = '/messages/' + id;

    return (
        <>
            <div className={s.wrapper}>
                <div className={s.people}>
                    <NavLink to={path} activeClassName={s.active} >{name}</NavLink>
                </div>
            </div>
        </>
    )
}
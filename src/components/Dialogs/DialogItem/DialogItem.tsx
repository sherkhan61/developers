import React from 'react'
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom'

const DialogItem: React.FC<PropsType> = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}><img
                src="https://image.flaticon.com/icons/png/512/149/149071.png"></img> {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem


// types
type PropsType = {
    name: string
    id: number
}
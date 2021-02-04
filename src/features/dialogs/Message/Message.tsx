import React from 'react'
import s from './../Dialogs.module.css'


export const Message: React.FC<PropsType> = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}




// types
type PropsType = {
    message: string
}
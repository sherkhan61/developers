import React from 'react'
import Eclipse from '../../assets/images/Eclipse.svg'

let Preloader: React.FC<PropsType> = (props) => {
    return <img src={Eclipse}/>
}

export default Preloader


// types
type PropsType = {}
import React from 'react'
import Preloader from '../common/Preloader/Preloader'
import {useSelector} from 'react-redux'
import {getIsFetching} from '../../Redux/users-selectors'
import {Users} from './Users'


export const UsersPage: React.FC<UsersPagePropsType> = (props) => {
    const isFetching = useSelector(getIsFetching)

    return <>
        <h2>{props.pageTitle}</h2>
        {isFetching ? <Preloader/> : null}
        <Users />
    </>
}

type UsersPagePropsType = {
    pageTitle: string
}

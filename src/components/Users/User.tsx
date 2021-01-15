import React, {useReducer} from 'react'
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.png'
import {NavLink} from 'react-router-dom'
import {UserType} from '../../types/types'
import {useDispatch, useSelector} from 'react-redux'
import {getFollowingInProgress, getUsersPage} from '../../Redux/users-selectors'
import usersReducer, {followThunk, unfollowThunk} from '../../Redux/users-reducer'
import {AppStateType} from '../../Redux/redux-store'


const User: React.FC<PropsType> = ({user}) => {

    //const user = useReducer(usersReducer)
    const followingInProgress = useSelector(getFollowingInProgress)


    const dispatch = useDispatch()
    const follow = (userId: number) => {
        dispatch(followThunk(userId))
    }
    const unfollow = (userId: number) => {
        dispatch(unfollowThunk(userId))
    }

    return (
        <div>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>Unfollow</button>


                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                </span>
            </span>
        </div>

    )
}
export default User


// types
type PropsType = {
    user: UserType
}

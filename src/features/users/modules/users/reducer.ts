import {updateObjectInArray} from '../../../../utils/object-helpers'
import {BaseThunkType, InferActionsTypes} from '../../../../lib/store/root-reducer'
import {UserType} from '../../../../api/social-api'
import {usersActions} from './actions'


export type InitialStateType = typeof initialState
export type ActionsTypes = InferActionsTypes<typeof usersActions>
export type ThunkType = BaseThunkType<ActionsTypes>




export let initialState = {
    users: [] as Array<UserType>,
    friends: [] as Array<UserType>,
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>, // array of users ids
}


const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/USERS/FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }

        case 'SN/USERS/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
            }

        case 'SN/USERS/SET_USERS':
            return {...state, users: action.users}

        case 'SN/USERS/SET_CURRENT_PAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SN/USERS/SET_TOTAL_USERS_COUNT': {
            return {...state, totalUsersCount: action.count}
        }
        case 'SN/USERS/TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS': {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
    }
    return state
}

export default usersReducer

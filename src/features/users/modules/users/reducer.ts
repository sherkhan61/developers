import {BaseThunkType, InferActionsTypes} from '../../../../lib/store/root-reducer'
import {UserType} from '../../../../api/social-api'
import {usersActions} from './actions'
import {updateObjectInArray} from '../../../../utils/obj-helpers'


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
                users: updateObjectInArray(state.users,
                    action.userId,
                    {followed: true})
            };
        case 'SN/USERS/UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users,
                    action.userId,
                    {followed: false})
            };
        case 'SN/USERS/SET_USERS':
            return {
                ...state,
                users: [...action.users]
            };
        case 'SN/USERS/SET_FRIENDS':
            return {
                ...state,
                friends: [...action.friends]
            };
        case 'SN/USERS/SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: +action.currentPage
            };
        case 'SN/USERS/SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.count
            };
        case 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter((userId) => action.userId !== userId),
            };

        default:
            return state;
    }
}

export default usersReducer

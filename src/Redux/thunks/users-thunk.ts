import {usersAPI} from '../../API/users-api'
import {Dispatch} from 'redux'
import {APIResponseType} from '../../API/api'
import {actions} from '../actions/users-action'
import {ActionsTypes, FilterType, ThunkType} from '../../types/users-type'


export const getUsers = (page: number, pageSize: number, filter: FilterType): ThunkType => {
    return async (dispatch) => {
        dispatch(actions.toggleIsFetching(true))
        dispatch(actions.setCurrentPage(page))
        dispatch(actions.setFilter(filter))

        let data = await usersAPI.getUsers(page, pageSize, filter.term, filter.friend)
        dispatch(actions.toggleIsFetching(false))
        dispatch(actions.setUsers(data.items))
        dispatch(actions.setTotalUsersCount(data.totalCount))
    }
}

const followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>,
                                  userId: number,
                                  apiMethod: (userId: number) => Promise<APIResponseType>,
                                  actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleIsFollowingProgress(true, userId))
    let response = await apiMethod(userId)

    if (response.resultCode == 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleIsFollowingProgress(false, userId))
}

export const followThunk = (userId: number): ThunkType => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess)
    }
}

export const unfollowThunk = (userId: number): ThunkType => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
    }
}
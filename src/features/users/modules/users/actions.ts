import {Dispatch} from 'redux'
import {APIResponseType, usersAPI, UserType} from '../../../../api/socialApi'
import {ActionsTypes, ThunkType} from './reducer'


// ==========Action Creators======================

export const usersActions = {
    followSuccess: (userId: number) => ({type: 'SN/USERS/FOLLOW', userId} as const),
    unfollowSuccess: (userId: number) => ({type: 'SN/USERS/UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserType>) => ({type: 'SN/USERS/SET_USERS', users} as const),
    setFriends: (friends: Array<UserType>) => ({type: 'SN/USERS/SET_FRIENDS', friends} as const),
    setCurrentPage: (currentPage: number) => ({
        type: 'SN/USERS/SET_CURRENT_PAGE',
        currentPage
    } as const),
    setTotalUsersCount: (totalUsersCount: number) => ({
        type: 'SN/USERS/SET_TOTAL_USERS_COUNT',
        count: totalUsersCount
    } as const),
    toggleIsFetching: (isFetching: boolean) => ({
        type: 'SN/USERS/TOGGLE_IS_FETCHING',
        isFetching
    } as const),
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => ({
        type: 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    } as const),
}


// =====================Thunk Creators====================

export const getUsers = (currentPage: number, pageSize: number, isFriend: boolean = false, term?: string): ThunkType => {
    return async (dispatch) => {
        dispatch(usersActions.toggleIsFetching(true))
        dispatch(usersActions.setCurrentPage(currentPage))

        let data = await usersAPI.getUsers(currentPage, pageSize, isFriend, term)
        dispatch(usersActions.toggleIsFetching(false))
        dispatch(usersActions.setUsers(data.items))
        dispatch(usersActions.setTotalUsersCount(data.totalCount!))
    }
}

const followUnfollowFlow = async (dispatch: Dispatch<ActionsTypes>,
                                  userId: number,
                                  apiMethod: (userId: number) => Promise<APIResponseType>,
                                  actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(usersActions.toggleIsFollowingProgress(true, userId))
    let response = await apiMethod(userId)

    if (response.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(usersActions.toggleIsFollowingProgress(false, userId))
}

export const followThunk = (userId: number): ThunkType => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), usersActions.followSuccess)
    }
}

export const unfollowThunk = (userId: number): ThunkType => {
    return async (dispatch) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), usersActions.unfollowSuccess)
    }
}

export const search = (term: string): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(usersActions.toggleIsFetching(true));
        const friendsPortion = await usersAPI.getUsers(getState().usersPage.pageSize,
            getState().usersPage.currentPage / 2,
            true,
            term);
        const usersPortion = await usersAPI.getUsers(getState().usersPage.pageSize,
            getState().usersPage.currentPage / 2,
            false,
            term);
        const allUsers = [...friendsPortion.items, ...usersPortion.items];
        dispatch(usersActions.setUsers(allUsers));
        dispatch(usersActions.setTotalUsersCount(allUsers.length));
        dispatch(usersActions.toggleIsFetching(false));
    };
}

export const getFriendsDemo = (pageSize: number,
                               currentPage: number,
                               isFriend: boolean = true): ThunkType => {
    return async (dispatch) => {
        let data = await usersAPI.getUsers(pageSize, currentPage, isFriend)
            dispatch(usersActions.setFriends(data.items));
    }
};
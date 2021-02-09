import {RootState} from '../../../../lib/store/root-reducer'


export const getUsersPage = (state: RootState) => {
    return state.usersPage.users
}
export const getPageSize = (state: RootState) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state: RootState) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state: RootState) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state: RootState) => {
    return state.usersPage.isFetching
}

export const getFollowingInProgress = (state: RootState) => {
    return state.usersPage.followingInProgress
}

import {PhotosType, ProfileType} from '../../../../types/types'
import {profileAPI} from '../../../../API/profile-api'
import {stopSubmit} from 'redux-form'
import {ThunkType} from './reducer'
import {usersAPI} from '../../../../API/users-api'


// ==========Action Creators======================


export const profileActions = {
    addPostActionCreate: (newPostText: string) => ({type: 'SN/PROFILE/ADD-POST', newPostText} as const),
    setUsersProfile: (profile: ProfileType) => ({type: 'SN/PROFILE/SET_USERS_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SN/PROFILE/SET_STATUS', status} as const),
    deletePost: (postId: number) => ({type: 'SN/PROFILE/DELETE_POST', postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos} as const),
    toggleIsFollowing: (isFollowing: boolean) => ({type: 'SN/TOGGLE_IS_FOLLOWING', isFollowing} as const),
    isFollowed: (isFollowed: boolean) => ({type: 'SN/IS_FOLLOWED', isFollowed} as const)
}


// =====================Thunk Creators====================


export const getProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(profileActions.setUsersProfile(data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(profileActions.setStatus(data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(profileActions.setStatus(status))
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(profileActions.savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)
    if (data.resultCode === 0) {
        if (userId != null) {
            dispatch(getProfile(userId))
        } else {
            throw new Error('userId can\'t be null')
        }

    } else {
        dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}

export const followUser = (): ThunkType => async (dispatch, getState) => {
    dispatch(profileActions.toggleIsFollowing(true))
    let data = await usersAPI.follow(getState().profilePage.profile!.userId!)
    dispatch(profileActions.isFollowed(true))
    dispatch(profileActions.toggleIsFollowing(false))
    /*dispatch(actions.usersActions.getFriendsDemo(6, 1))*/
}

export const unFollowUser = (): ThunkType => async (dispatch, getState) => {
    dispatch(profileActions.toggleIsFollowing(true))
    let data = await usersAPI.unfollow(getState().profilePage.profile!.userId!)
    dispatch(profileActions.isFollowed(false))
    dispatch(profileActions.toggleIsFollowing(false))
    /*dispatch(actions.usersActions.getFriendsDemo(6, 1))*/
}

export const isUserFollowed = (userId: number): ThunkType => async (dispatch) => {
    let data = await usersAPI.isFollowed(userId)
    dispatch(profileActions.isFollowed(data))
}

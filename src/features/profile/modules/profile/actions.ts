import {ThunkType} from './reducer'
import {PhotosType, profileAPI, ProfileType, usersAPI} from '../../../../api/social-api'
import {getFriendsDemo} from '../../../users/modules/users/actions'
import {DispatchType, RootState} from '../../../../lib/store/root-reducer'


// ==========Action Creators======================


export const profileActions = {
    setUsersProfile: (profile: ProfileType | null) => ({type: 'SN/PROFILE/SET_USERS_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SN/PROFILE/SET_STATUS', status} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos} as const),
    toggleIsFollowing: (isFollowing: boolean) => ({type: 'SN/PROFILE/TOGGLE_IS_FOLLOWING', isFollowing} as const),
    isFollowed: (isFollowed: boolean) => ({type: 'SN/PROFILE/IS_FOLLOWED', isFollowed} as const)
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

export const saveProfile = (profile: ProfileType) => async (dispatch: DispatchType, getState: () => RootState) => {
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        if ("userId" in getState().auth.user) {
            await dispatch(getProfile(getState().auth.user.userId!));
        }
    } else {
        return response.data.messages;
    }
}

export const followUser = (): ThunkType => async (dispatch, getState) => {
    dispatch(profileActions.toggleIsFollowing(true))
    await usersAPI.follow(getState().profilePage.profile!.userId!)
    dispatch(profileActions.isFollowed(true))
    dispatch(profileActions.toggleIsFollowing(false))
    dispatch(getFriendsDemo(6, 1))
}

export const unFollowUser = (): ThunkType => async (dispatch, getState) => {
    dispatch(profileActions.toggleIsFollowing(true))
    await usersAPI.unfollow(getState().profilePage.profile!.userId!)
    dispatch(profileActions.isFollowed(false))
    dispatch(profileActions.toggleIsFollowing(false))
    dispatch(getFriendsDemo(6, 1))
}

export const isUserFollowed = (userId: number): ThunkType => async (dispatch) => {
    let data = await usersAPI.isFollowed(userId)
    dispatch(profileActions.isFollowed(data))
}

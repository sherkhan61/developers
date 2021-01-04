import {FormAction, stopSubmit} from 'redux-form'
import {PhotosType, PostType, ProfileType} from '../types/types'
import {profileAPI} from '../API/profile-api'
import {BaseThunkType, InferActionsTypes} from './redux-store'


let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'Hi, bro', likesCount: 12},
        {id: 3, message: 'Bla bla bla', likesCount: 12},
        {id: 4, message: 'Yo Yo Yo Yo Yo', likesCount: 12},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
}


/// reducer start
const profileReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/PROFILE/ADD-POST': {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            }
        }
        case 'SN/PROFILE/DELETE_POST':
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.postId)
            }
        case 'SN/PROFILE/SET_USERS_PROFILE': {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case 'SN/PROFILE/SET_STATUS': {
            return {
                ...state,
                status: action.status,
            }
        }
        case 'SN/PROFILE/SAVE_PHOTO_SUCCESS': {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType,
            }
        }
    }
    return state
}
/// reducer end


/// actions start
export const actions = {
    addPostActionCreate: (newPostText: string) => ({type: 'SN/PROFILE/ADD-POST', newPostText} as const),
    setUsersProfile: (profile: ProfileType) => ({type: 'SN/PROFILE/SET_USERS_PROFILE', profile} as const),
    setStatus: (status: string) => ({type: 'SN/PROFILE/SET_STATUS', status} as const),
    deletePost: (postId: number) => ({type: 'SN/PROFILE/DELETE_POST', postId} as const),
    savePhotoSuccess: (photos: PhotosType) => ({type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos} as const),
}
/// actions end


/// thunks start
export const getProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(actions.setUsersProfile(data))
}

export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(data))
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(actions.setStatus(status))
    }
}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
    let data = await profileAPI.savePhoto(file)
    if (data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(data.data.photos))
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
/// thunks end


export default profileReducer


/// types
export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes | FormAction>
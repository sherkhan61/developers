import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {profileAPI} from "../API/profile-api";

const ADD_POST = 'ADD-POST';
const DELETE_POST = 'DELETE_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likeCount: 11},
        {id: 2, message: 'Hi, bro', likeCount: 12},
        {id: 3, message: 'Bla bla bla', likeCount: 12},
        {id: 4, message: 'Yo Yo Yo Yo Yo', likeCount: 12},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: "",
    newPostText: ""
}
export type InitialStateType = typeof initialState


const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        }
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.postId)
            }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType,
            }
        }
    }
    return state;
}

// type ProfileActionsTypes = AddPostActionCreateActionType | SetUsersProfileActionType |
//    SetStatusActionType | DeletePostActionType | SavePhotoSuccessActionType


type AddPostActionCreateActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPostActionCreate = (newPostText: string): AddPostActionCreateActionType => ({type: ADD_POST, newPostText})

type SetUsersProfileActionType = {
    type: typeof SET_USERS_PROFILE
    profile: ProfileType
}
export const setUsersProfile = (profile: ProfileType): SetUsersProfileActionType => ({type: SET_USERS_PROFILE, profile})

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status})

type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId})

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})


/*type ProfileDispatch = Dispatch<ProfileActionsTypes>
type ProfileThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ProfileActionsTypes>*/

export const getProfile = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getProfile(userId);
    dispatch(setUsersProfile(data))
}

export const getStatus = (userId: number) => async (dispatch: any) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data))
}

export const updateStatus = (status: string) => async (dispatch: any) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let data = await profileAPI.savePhoto(file);
    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos))
    }
}

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userId;
    const data = await profileAPI.saveProfile(profile);
    if (data.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}));
        return Promise.reject(data.messages[0]);
    }
}

export default profileReducer;
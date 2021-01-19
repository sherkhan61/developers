import {PostType, ProfileType} from '../../types/types'
import {ActionsTypes, InitialStateType} from '../../types/profile-type'


export let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'Hi, bro', likesCount: 12},
        {id: 3, message: 'Bla bla bla', likesCount: 12},
        {id: 4, message: 'Yo Yo Yo Yo Yo', likesCount: 12},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ''
}


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


export default profileReducer



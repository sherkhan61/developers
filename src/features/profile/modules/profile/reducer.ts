import {BaseThunkType, InferActionsTypes} from '../../../../lib/store/root-reducer'
import {profileActions} from './actions'
import {ProfileType} from '../../../../api/social-api'


export type ActionsTypes = InferActionsTypes<typeof profileActions>
export type ThunkType = BaseThunkType<ActionsTypes>

type ProfileState = {
    isFollowing: boolean,
    followed: boolean,
    profile: null  | ProfileType,
    status: string
}

export const initialState: ProfileState = {
    isFollowing: false,
    followed:false,
    profile: null,
    status: "Статус Редакса"
};

const profileReducer = (state = initialState, action: ActionsTypes): ProfileState => {
    switch (action.type) {
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
        case 'SN/TOGGLE_IS_FOLLOWING': {
            return {
                ...state,
                isFollowing: action.isFollowing
            }
        }
        case 'SN/IS_FOLLOWED': {
            return {
                ...state,
                followed: action.isFollowed
            }
        }
    }
    return state
}


export default profileReducer
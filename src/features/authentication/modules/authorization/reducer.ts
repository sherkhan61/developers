import {FormAction} from 'redux-form'
import {BaseThunkType, InferActionsTypes} from '../../../../lib/store/root-reducer'
import {actions} from './actions'
import {ProfileType} from '../../../../api/social-api'


export type InitialStateType = {
    user: ProfileType,
    isAuth: boolean,
    captchaUrl: string | null
}


export type ActionsTypes = InferActionsTypes<typeof actions>
export type ThunkType = BaseThunkType<ActionsTypes | FormAction>


export let initialState: InitialStateType = {
    user: {
        aboutMe: null,
        contacts: null,
        lookingForAJob: null,
        lookingForAJobDescription: null,
        fullName: null,
        userId: null,
        photos: null,
    },
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/auth/SET_USER_DATA':
            return {
                ...state,
                user: {
                    ...action.user,
                },
                isAuth: action.isAuth
            }
        case 'SN/auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state
    }

}
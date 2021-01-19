import {ActionsTypes, InitialStateType} from '../../types/auth-type'


export let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null,  // if null, then captcha is not required
}

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'SN/auth/SET_USER_DATA':
        case 'SN/auth/GET_CAPTCHA_URL_SUCCESS':
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }

}

export default authReducer


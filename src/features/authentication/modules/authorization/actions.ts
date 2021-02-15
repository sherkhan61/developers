import {ThunkType} from './reducer'
import {
    authAPI,
    profileAPI,
    ProfileType,
    securityAPI
} from '../../../../api/social-api'


// ==========Action Creators======================

export const actions = {
    setAuthUserData: (user: undefined | ProfileType,
                      isAuth: boolean) => ({
        type: 'SN/auth/SET_USER_DATA',
        user: {
            ...user
        },
        isAuth
    } as const),
    getCaptchaUrlSuccess: (captchaUrl: string | null) => ({
        type: 'SN/auth/GET_CAPTCHA_URL_SUCCESS',
        captchaUrl
    } as const)
}


// =====================Thunk Creators====================

export const getAuth = (isAuth: boolean): ThunkType => async (dispatch) => {
    debugger
    let data = await authAPI.me()
    debugger
    if (data) {
        const authUserProfile: ProfileType = await profileAPI.getProfile(data.id)
        dispatch(actions.setAuthUserData(authUserProfile, isAuth))
    }

}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    debugger
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === 0) {
        await dispatch(getAuth(true))
    } else {
        if (data.resultCode === 10) {
           await dispatch(getCaptchaUrl())
        }
        const error = data.messages.length > 0 ?
            data.messages[0] :
            "Unknown Error";
        return error;
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url
    dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export const logout = (): ThunkType => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(actions.setAuthUserData(undefined, false))
    }
}
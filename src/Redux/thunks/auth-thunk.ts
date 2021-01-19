import {authAPI} from '../../API/auth-api'
import {ResultCodeForCaptcha, ResultCodesEnum} from '../../API/api'
import {stopSubmit} from 'redux-form'
import {securityAPI} from '../../API/security-api'
import {ThunkType} from '../../types/auth-type'
import {actions} from '../actions/auth-action'


export const getAuth = (): ThunkType => async (dispatch) => {
    let data = await authAPI.me()

    if (data.resultCode === ResultCodesEnum.Success) {
        let {id, login, email} = data.data
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha)
    if (data.resultCode === ResultCodesEnum.Success) {
        //success, get auth data
        dispatch(getAuth())
    } else {
        if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
            dispatch(getCaptchaUrl())
        }
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
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
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}
import {AppStateType} from './redux-store'



export const selectUserId = (state: AppStateType) => {
    return state.auth.userId
}
export const selectEmail = (state: AppStateType) => {
    return state.auth.email
}
export const selectCaptchaUrl = (state: AppStateType) => {
    return state.auth.captchaUrl
}
export const selectIsAuth = (state: AppStateType) => {
    return state.auth.isAuth
}
export const selectCurrentUserLogin = (state: AppStateType) => {
    return state.auth.login
}


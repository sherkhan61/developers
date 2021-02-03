import {RootState} from '../../lib/store/root-reducer'


export const selectUserId = (state: RootState) => {
    return state.auth.userId
}
export const selectEmail = (state: RootState) => {
    return state.auth.email
}
export const selectCaptchaUrl = (state: RootState) => {
    return state.auth.captchaUrl
}
export const selectIsAuth = (state: RootState) => {
    return state.auth.isAuth
}
export const selectCurrentUserLogin = (state: RootState) => {
    return state.auth.login
}


import {BaseThunkType, InferActionsTypes} from '../Redux/redux-store'
import {FormAction} from 'redux-form'
import {actions} from '../Redux/actions/auth-action'


export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}


export type ActionsTypes = InferActionsTypes<typeof actions>
export type ThunkType = BaseThunkType<ActionsTypes | FormAction>
import {FormAction} from 'redux-form'
import {actions} from '../Redux/actions/auth-action'
import {BaseThunkType, InferActionsTypes} from '../lib/store/root-reducer'


export type InitialStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}


export type ActionsTypes = InferActionsTypes<typeof actions>
export type ThunkType = BaseThunkType<ActionsTypes | FormAction>
import {BaseThunkType, InferActionsTypes} from '../Redux/redux-store'
import {FormAction} from 'redux-form'
import {initialState} from '../Redux/reducers/profile-reducer'
import {actions} from '../Redux/actions/profile-action'


export type InitialStateType = typeof initialState
export type ActionsTypes = InferActionsTypes<typeof actions>
export type ThunkType = BaseThunkType<ActionsTypes | FormAction>
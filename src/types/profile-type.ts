import {FormAction} from 'redux-form'
import {initialState} from '../Redux/reducers/profile-reducer'
import {actions} from '../Redux/actions/profile-action'
import {BaseThunkType, InferActionsTypes} from '../lib/store/root-reducer'


export type InitialStateType = typeof initialState
export type ActionsTypes = InferActionsTypes<typeof actions>
export type ThunkType = BaseThunkType<ActionsTypes | FormAction>
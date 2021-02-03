import {initialState} from '../Redux/reducers/users-reducer'
import {actions} from '../Redux/actions/users-action'
import {BaseThunkType, InferActionsTypes} from '../lib/store/root-reducer'


export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
export type ActionsTypes = InferActionsTypes<typeof actions>
export type ThunkType = BaseThunkType<ActionsTypes>
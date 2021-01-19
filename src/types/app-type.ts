import {InferActionsTypes} from '../Redux/redux-store'
import {actions} from '../Redux/actions/app-action'
import {initialState} from '../Redux/reducers/app-reducer'


export type InitialStateType = typeof initialState
export type ActionsType = InferActionsTypes<typeof actions>
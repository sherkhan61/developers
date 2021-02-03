import {actions} from '../Redux/actions/app-action'
import {initialState} from '../Redux/reducers/app-reducer'
import {InferActionsTypes} from '../lib/store/root-reducer'


export type InitialStateType = typeof initialState
export type ActionsType = InferActionsTypes<typeof actions>
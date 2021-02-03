import {actions} from '../Redux/actions/dialogs-action'
import {initialState} from '../Redux/reducers/dialogs-reducer'
import {InferActionsTypes} from '../lib/store/root-reducer'


export type InitialStateType = typeof initialState
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type ActionsType = InferActionsTypes<typeof actions>
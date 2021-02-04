
import {actions} from './actions'
import {InferActionsTypes} from '../../../../lib/store/root-reducer'


export type InitialStateType = typeof initialState
export type ActionsType = InferActionsTypes<typeof actions>


export let initialState = {
    initialized: false
}


export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/APP/INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
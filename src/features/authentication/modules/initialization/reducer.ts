import {InferActionsTypes} from '../../../../lib/store/root-reducer'
import {initActions} from './actions'


export type InitialStateType = typeof initialState
export type ActionsType = InferActionsTypes<typeof initActions>


export let initialState = {
    initialized: false
}


export const initReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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
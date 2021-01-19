import {ActionsType, InitialStateType} from '../../types/app-type'




export let initialState = {
    initialized: false
}


const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
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


export default appReducer



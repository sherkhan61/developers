import {getAuth} from './auth-reducer'
import {InferActionsTypes} from './redux-store'


let initialState = {
    initialized: false
}


// reducers start
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
// reducers end


// actions start
export const actions = {
    initializedSuccess: () => ({type: 'SN/APP/INITIALIZED_SUCCESS'} as const)
}
// actions end


// thunks start
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuth())

    Promise.all([promise])
        .then(() => {
            dispatch(actions.initializedSuccess())
        })
}
// thunks end


export default appReducer


// types
export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
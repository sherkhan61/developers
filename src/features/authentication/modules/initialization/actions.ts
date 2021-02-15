import {getAuth} from '../authorization/actions'


// ==========Action Creators======================



export const initActions = {
    initializedSuccess: () => ({type: 'SN/APP/INITIALIZED_SUCCESS'} as const)
}

// =====================Thunk Creators====================


export const initializeApp = () => (dispatch: any) => {
    debugger
    return dispatch(getAuth(true)).then(() => {
        dispatch(initActions.initializedSuccess())
    });
    debugger
};





// ==========Action Creators======================

import {getAuth} from '../authorization/actions'

export const initActions = {
    initializedSuccess: () => ({type: 'SN/APP/INITIALIZED_SUCCESS'} as const)
}

// =====================Thunk Creators====================

export const initializeApp = () => async (dispatch: any) => {
    let promise = await dispatch(getAuth(true))
    dispatch(initActions.initializedSuccess())
}




// ==========Action Creators======================

import {getAuth} from '../authorization/actions'

export const actions = {
    initializedSuccess: () => ({type: 'SN/APP/INITIALIZED_SUCCESS'} as const)
}

// =====================Thunk Creators====================

export const initializeApp = () => async (dispatch: any) => {
    let promise = await dispatch(getAuth())
    dispatch(actions.initializedSuccess())
}
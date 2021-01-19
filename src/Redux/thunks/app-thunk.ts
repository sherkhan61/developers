import {actions} from '../actions/app-action'
import {getAuth} from './auth-thunk'




export const initializeApp = () => async (dispatch: any) => {
    let promise = await dispatch(getAuth())
    dispatch(actions.initializedSuccess())
}
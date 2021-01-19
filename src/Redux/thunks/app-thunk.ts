import {getAuth} from '../auth-reducer'
import {actions} from '../actions/app-action'




export const initializeApp = () => async (dispatch: any) => {
    let promise = await dispatch(getAuth())
    dispatch(actions.initializedSuccess())
}
import {RootState} from '../../../../lib/store/root-reducer'


export const selectIsAuth = (state: RootState) => {
    return state.auth.isAuth
}
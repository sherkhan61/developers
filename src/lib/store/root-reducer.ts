import {Action, AnyAction, combineReducers} from 'redux'
import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {authReducer} from '../../features/authentication/modules/authorization/reducer'
import {initReducer} from '../../features/authentication/modules/initialization/reducer'
import profileReducer from '../../features/profile/modules/profile/reducer'
import usersReducer from '../../features/users/modules/users/reducer'


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    init: initReducer
})


export type RootState = ReturnType<typeof rootReducer>;

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never


export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, RootState, unknown, A>

export type DispatchType = ThunkDispatch<RootState, void, AnyAction>;
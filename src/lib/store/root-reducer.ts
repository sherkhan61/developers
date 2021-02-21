import {Action, AnyAction, combineReducers} from 'redux'
import {ThunkAction, ThunkDispatch} from 'redux-thunk'
import profileReducer from '@profile/modules/profile/reducer'
import usersReducer from '@users/modules/users/reducer'
import chatReducer from '@chat/modules/reducer'
import {authReducer} from '@auth/modules/authorization/reducer'
import {initReducer} from '@auth/modules/initialization/reducer'
import {newsReducer} from '@news/modules/news/reducer'
import {musicReducer} from '@music/modules/music/reducer'


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer,
    chat: chatReducer,
    auth: authReducer,
    init: initReducer,
    news: newsReducer,
    music: musicReducer
})


export type RootState = ReturnType<typeof rootReducer>;

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never


export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, RootState, unknown, A>

export type DispatchType = ThunkDispatch<RootState, void, AnyAction>;
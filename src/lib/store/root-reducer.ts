import {Action, combineReducers} from 'redux'
import usersReducer from '../../Redux/reducers/users-reducer'
import {reducer as formReducer} from 'redux-form'
import {ThunkAction} from 'redux-thunk'
import {authReducer} from '../../features/authentication/modules/authorization/reducer'
import {appReducer} from '../../features/authentication/modules/initialization/reducer'
import dialogsReducer from '../../features/dialogs/modules/dialogs/reducer'
import profileReducer from '../../features/profile/modules/profile/reducer'


export const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})


export type RootState = ReturnType<typeof rootReducer>;

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never


export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, RootState, unknown, A>


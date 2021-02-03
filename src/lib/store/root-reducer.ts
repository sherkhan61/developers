import {Action, combineReducers} from 'redux'
import profileReducer from '../../Redux/reducers/profile-reducer'
import dialogsReducer from '../../Redux/reducers/dialogs-reducer'
import usersReducer from '../../Redux/reducers/users-reducer'
import {reducer as formReducer} from 'redux-form'
import {ThunkAction} from 'redux-thunk'
import {authReducer} from '../../features/modules/authorization/reducer'
import {appReducer} from '../../features/modules/initialization/reducer'


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


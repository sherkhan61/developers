import {Action, applyMiddleware, combineReducers, compose, createStore} from 'redux'
import profileReducer from './profile-reducer'
import dialogsReducer from './reducers/dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './reducers/users-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from './reducers/app-reducer'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

type RootReducerType = typeof rootReducer               // (globalState: AppStateType) => AppStateType
export type AppStateType = ReturnType<RootReducerType>


export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never


export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose         //Redux dev tools for Chrome


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))  //Redux dev tools for Chrome
//let store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window._store_ = store

export default store
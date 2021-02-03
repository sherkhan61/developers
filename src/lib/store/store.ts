import {applyMiddleware, compose, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {rootReducer} from './root-reducer'


export const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
//Redux dev tools for Chrome


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
import {InferActionsTypes} from '../../../../lib/store/root-reducer'
import {newsActions} from './actions'
import {IArticle} from "@api/MediaStackApi";


export type ActionsTypes = InferActionsTypes<typeof newsActions>


type NewsStateType = {
    articles: Array<IArticle> | null
}


export const initialState: NewsStateType = {
    articles: null
}

export const newsReducer = (state = initialState,
                        action: ActionsTypes): NewsStateType => {
    switch (action.type) {
        case 'NEWS/SET_NEWS':
            return {
                ...state,
                articles: action.articles
            }
        default:
            return state
    }
}

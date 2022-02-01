import {DispatchType} from '../../../../lib/store/root-reducer'
import {IArticle, INewsParams, mediaStackApi} from "@api/MediaStackApi";



// ==========Action Creators======================
export const newsActions = {
  setNews: (articles: Array<IArticle>) => ({type: "NEWS/SET_NEWS", articles} as const)
}

// =====================Thunk Creators====================

export const getNews = (params: INewsParams ) => (dispatch: DispatchType) => {
  mediaStackApi.getNews(params).then((articles) => {
    if (articles) dispatch(newsActions.setNews(articles))
  });
};

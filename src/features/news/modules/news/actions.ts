import {IArticle, INewsParams, newsApi} from '../../../../api/news-api'
import {DispatchType} from '../../../../lib/store/root-reducer'



// ==========Action Creators======================
export const newsActions = {
  setNews: (articles: Array<IArticle>) => ({type: "NEWS/SET_NEWS", articles} as const)
}

// =====================Thunk Creators====================

export const getNews = (params: INewsParams ) => (dispatch: DispatchType) => {
  newsApi.getNews(params).then((articles) => {
    if (articles) dispatch(newsActions.setNews(articles))
  });
};

import classes from "../../News.module.scss";
import React, {FC, ReactNode} from "react";
import {useSelector} from "react-redux";
import {RootState} from '../../../../lib/store/root-reducer'
import {Article} from '../moleculs/Article/Article'
import {Preloader} from '../../../../ui/atoms/preloader/Preloader'


export const Articles: FC = () => {


  const articles = useSelector((state: RootState) => (
      state.news.articles
  ));

  let articleElements: Array<ReactNode> | undefined | string = articles?.map((item,index) => {
    return <Article key={index} {...item}/>
  });

  if (articleElements?.length === 0) {
    articleElements = "Sorry nothing found";
  }

  return (
      articles ?
          <section
              className={classes.news}>
            {articleElements || <Preloader/>}
          </section> :
          <Preloader/>
  )
};
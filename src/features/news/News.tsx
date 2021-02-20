import React, {FC, useEffect} from 'react'
import classes from './News.module.scss'
import {useDispatch} from 'react-redux'
import {getNews} from '@news/modules/news/actions'
import {Articles} from '@news/ui/Organisms/Articles'
import {Categories} from '@news/ui/moleculs/Categories/Categories'
import {Search} from '@news/ui/moleculs/Search/Search'


export const News: FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews({}))
  }, [dispatch]);

  return <div className={classes.news_wrapper}>
    <Search dispatch={dispatch}/>
    <Categories dispatch={dispatch}/>
    <Articles/>
  </div>;
};

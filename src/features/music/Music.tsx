import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styles from "./Music.module.scss"
import {RootState} from '../../lib/store/root-reducer'
import {getMusicChart, musicActions} from './modules/music/actions'
import {Chart} from './ui/organisms/Chart'
import {Search} from './ui/organisms/Search/Search'
import {SearchResults} from './ui/organisms/SearchResults'


export const Music: FC = () => {

  const dispatch = useDispatch();

  const searchResults = useSelector((state:RootState) => state.music?.searchResults?.data);

  useEffect(() => {
    dispatch(musicActions.setSearchResults(null));
    dispatch(getMusicChart());

  }, [dispatch]);


  return (
    <section className={styles.music_wrapper}>
      <Search dispatch={dispatch}/>
      {searchResults ?
        <SearchResults searchResults={searchResults}
          dispatch={dispatch}/> :
        <Chart/>}
    </section>
  )
};

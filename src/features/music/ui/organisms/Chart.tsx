import classes from "../../Music.module.scss";
import React, {FC} from "react";
import {shallowEqual, useSelector} from "react-redux";
import {RootState} from '../../../../lib/store/root-reducer'
import {Tracks} from './Tracks/Tracks'
import {Artists} from '../moleculs/Artists'
import {Albums} from '../moleculs/Albums'
import {Podcasts} from '../moleculs/Podcasts'
import {Playlists} from '../moleculs/Playlists'


export const Chart: FC = () => {

  const {tracks, artists, albums, podcasts, playlists} = useSelector((state: RootState) => (
      {
        tracks: state.music.charts?.tracks?.data,
        artists: state.music.charts?.artists?.data,
        albums: state.music.charts?.albums?.data,
        podcasts: state.music.charts?.podcasts?.data,
        playlists: state.music.charts?.playlists?.data,
      }
  ), shallowEqual);
  return (
      <div className={classes.music}>
        <Tracks tracks={tracks} children={"Top Tracks"}/>
        <Artists artists={artists}/>
        <Albums albums={albums}/>
        <Podcasts podcasts={podcasts}/>
        <Playlists playlists={playlists}/>
      </div>
  )
};

import React, {FC} from 'react'
import {useDispatch} from 'react-redux'
import {musicActions} from '../../features/music/modules/music/actions'
import {CommonTemplate} from '../../ui/templates/Common'
import {Music} from '../../features/music/Music'


export const MusicPage: FC = () => {
  const dispatch = useDispatch();
  const clearSearch = (): void => {
    dispatch(musicActions.setSearchResults(null));
  };


  return (
    <CommonTemplate clearMusicSearch={clearSearch}>
      <Music/>
    </CommonTemplate>
  )
};
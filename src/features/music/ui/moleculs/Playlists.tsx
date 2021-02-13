import React, {FC} from "react";
import {IPlayLists} from '../../../../api/music-api'
import {Card} from '../templates/card/Card'
import {Cards} from '../templates/cards/Cards'



interface IPlaylistsProps {
  playlists?: Array<IPlayLists>
}

export const Playlists:FC<IPlaylistsProps> = ({playlists}) => {

  const playlistsElements = playlists?.map((playlist) => <Card
      key={playlist.id}
    id={playlist.id} pictureLink={playlist.link}
    picture={playlist.picture_big}
    // title={playlist.title}
  />);

  return (
    <>
      <Cards header="Top Playlists">
        {playlistsElements}
      </Cards>
    </>
  )
};
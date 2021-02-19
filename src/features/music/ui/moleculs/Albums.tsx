import React, {FC, ReactNode} from "react";
import {IAlbum} from '../../../../api/musicApi'
import {Card} from '../templates/card/Card'
import {Cards} from '../templates/cards/Cards'



interface IAlbumsProps {
  albums?: Array<IAlbum>
}

export const Albums:FC<IAlbumsProps> = ({albums}) => {

  const albumsElements: Array<ReactNode> | undefined  = albums?.map((album) => <Card
      key={album.id}
    id={album.id} picture={album.cover_big}
    artistName={album.artist.name}
    title={album.title}
    link={album.link}
    font_size="1rem"
  />);

  return (
    <>
      <Cards header="Top Albums">
        {albumsElements}
      </Cards>
    </>
  )
};
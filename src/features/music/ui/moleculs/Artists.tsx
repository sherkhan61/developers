import React, {FC, ReactNode} from 'react'
import {IArtist} from '../../../../api/musicApi'
import {Card} from '../templates/card/Card'
import {Cards} from '../templates/cards/Cards'


interface IArtistsProps {
    artists?: Array<IArtist>
}

export const Artists: FC<IArtistsProps> = ({artists}) => {

    const artistsElements: Array<ReactNode> | undefined = artists?.map((artist) =>
        <Card key={artist.id}
              id={artist.id} link={artist.link}
              picture={artist.picture_big}
              artistName={artist.name}
        />)

    return (
        <>
            <Cards header="Top Artists">
                {artistsElements}
            </Cards>
        </>
    )
}
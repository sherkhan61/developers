import classes from '../../Music.module.scss'
import {IPodcasts} from '../../../../api/music-api'
import React, {FC, ReactNode} from 'react'
import {Card} from '../templates/card/Card'
import {Cards} from '../templates/cards/Cards'


interface IPodcastsProps {
    podcasts?: Array<IPodcasts>
}

export const Podcasts: FC<IPodcastsProps> = ({podcasts}) => {

    const podcastsElements: Array<ReactNode> | undefined = podcasts?.map((podcast) => {
        return <Card key={podcast.id}
                     id={podcast.id} pictureLink={podcast.link}
                     picture={podcast.picture_big}>
            <p
                className={classes.podcast_description}>{podcast.description}</p>
        </Card>
    })

    return (
        <>
            <Cards header="Top Podcasts">
                {podcastsElements}
            </Cards>
        </>
    )
}
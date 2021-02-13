import styles from './Tracks.module.scss'
import React, {FC, PropsWithChildren, useEffect, useReducer, useRef} from 'react'
import {ITracks} from '../../../../../api/music-api'
import {initialState, playerReducer} from '../../../modules/player/reducer'
import {playerActions} from '../../../modules/player/actions'
import {converter} from '../../../utils'
import {Player} from '../Player/Player'
import {Preloader} from '../../../../../ui/atoms/preloader/Preloader'


interface ITracksProps extends PropsWithChildren<{ tracks: undefined | Array<ITracks> }> {
}

export const Tracks: FC<ITracksProps> = ({tracks, children}) => {

    const trackRef = useRef<HTMLAudioElement>(null)

    const [state, dispatch] = useReducer(playerReducer, initialState)

    useEffect(() => {
        if (tracks) {
            dispatch(playerActions.setSong({
                currentAlbum: tracks[0].album.cover_small,
                currentSrc: tracks[0].preview,
                bgPhoto: tracks[0].artist.picture_xl,
                artist: tracks[0].artist.name,
                title: tracks[0].title
            }))
        }
    }, [tracks])


    const initPlayer = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.currentTarget.dataset.url_track && state.currentSrc !==
            e.currentTarget.dataset.url_track) {
            dispatch((
                playerActions.setSong({
                    currentNumber: +e.currentTarget.dataset.track_number!,
                    currentSrc: e.currentTarget.dataset.url_track,
                    currentAlbum: e.currentTarget.dataset.album_photo!,
                    bgPhoto: e.currentTarget.dataset.bg_photo!,
                    artist: e.currentTarget.dataset.artist_name!,
                    title: e.currentTarget.dataset.track_title!
                })
            ))
        } else {
            onPlay()
        }
    }

    const onPlay = (): void => {
        if (trackRef.current!.paused) {
            const playPromise = trackRef.current!.play()
            // Fix Uncaught Error: The error you provided does not contain a stack trace.
            if (playPromise) playPromise.catch(() => {
            })
            //==========================================================================
            dispatch(playerActions.toggleIsPlaying(true))
        } else {
            trackRef.current!.pause()
            dispatch(playerActions.toggleIsPlaying(false))
        }
    }

    useEffect(() => {

        return () => {
            //we have old state here that`s why track dont
            // play when first
            // song dispatch happened
            if (state.currentSrc.length > 0) onPlay()
        }
    }, [state.currentNumber, state.currentSrc.length])

    const tracksElements = tracks?.map((track, index) => {
        let playing
        if (state.currentNumber === index) {
            playing = styles.track_album_playing
        } else {
            playing = ''
        }

        return <div key={track.id} className={styles.track_container}>
            <div
                data-url_track={track.preview}
                data-track_number={index}
                data-album_photo={track.album.cover_small}
                data-bg_photo={track.artist.picture_xl}
                data-track_title={track.title}
                data-artist_name={track.artist.name}
                onClick={initPlayer}
                className={styles.track_album + ' ' + playing}>
                <img
                    alt="artist_image" src={track.album.cover_small}/>
                <i className="fa fa-play"/>
            </div>
            <div className={styles.track_title}>
                <a href={track.artist.link}>
                    <span>{track.artist.name} - {track.title}</span>
                </a>
                <small
                    className={styles.track_title_duration}>{converter(track.duration)}
                </small>
            </div>
        </div>
    })

    return (
        <>

            {tracksElements ?
                <Player ref={trackRef} dispatch={dispatch} state={state}
                        initPlayer={initPlayer}/> :
                <Preloader/>}
            <div className={styles.music_tracks}>
                <h3 className={styles.category_header}>{children}</h3>
                {tracksElements || <Preloader/>}
            </div>
        </>
    )
}
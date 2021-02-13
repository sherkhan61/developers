import React, {ChangeEvent, Dispatch, SyntheticEvent, useEffect, useRef} from 'react'
import styles from './Player.module.scss'
import {ActionsTypes, PlayerStateType} from '../../../modules/player/reducer'
import {DispatchType} from '../../../../../lib/store/root-reducer'
import {playerActions} from '../../../modules/player/actions'
import {calculateProgress, converter} from '../../../utils'




interface IPlayerProps {
    dispatch: Dispatch<ActionsTypes>,
    state: PlayerStateType
    initPlayer: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const Player = React.forwardRef<HTMLAudioElement, IPlayerProps>(
    ({dispatch, state, initPlayer}, ref) => {

        const trackRef = ref as React.RefObject<HTMLAudioElement>
        const hintRef = useRef<HTMLElement>(null)

        const onForward = (): void => {
            if (state.currentNumber >= 9) {
                return
            }

            const nextTrackNumber = state.currentNumber + 1
            const query = `div[data-track_number=${nextTrackNumber}]`

            const nextTrack = document.querySelector<HTMLDivElement>(`${query}`)
            dispatch(playerActions.nextSong({
                currentSrc: nextTrack!.dataset.url_track!,
                currentAlbum: nextTrack!.dataset.album_photo!,
                bgPhoto: nextTrack!.dataset.bg_photo!,
                artist: nextTrack!.dataset.artist_name!,
                title: nextTrack!.dataset.track_title!
            }))
        }

        const onBackward = (): void => {
            if (state.currentNumber <= 0) return
            const prevTrackNumber = state.currentNumber - 1
            const query = `div[data-track_number=${prevTrackNumber}]`
            const prevTrack = document.querySelector<HTMLDivElement>(`${query}`)
            dispatch(playerActions.prevSong({
                currentSrc: prevTrack!.dataset.url_track!,
                currentAlbum: prevTrack!.dataset.album_photo!,
                bgPhoto: prevTrack!.dataset.bg_photo!,
                artist: prevTrack!.dataset.artist_name!,
                title: prevTrack!.dataset.track_title!
            }))
        }

        const seekProgress = (e: React.MouseEvent<HTMLProgressElement>) => {
            if (!isNaN(trackRef.current!.duration)) {
                const duration = trackRef.current!.duration
                const percent = calculateProgress(e.pageX, e.currentTarget)
                trackRef.current!.currentTime = duration / 100 * percent
            }
        }

        const playingProgress = (e: SyntheticEvent<HTMLAudioElement>) => {
            let duration = trackRef.current!.duration
            if (isNaN(duration)) return
            const currentSecond = converter(trackRef.current!.currentTime)
            dispatch(playerActions.setProgress({
                progress: trackRef.current!.currentTime / duration * 100,
                currentSecond: currentSecond
            }))
            if (trackRef.current!.ended) onForward()
        }

        const onVolume = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(playerActions.setVolume(+e.target.value))

        }

        const showHint = (e: React.MouseEvent<HTMLProgressElement>) => {
            if (!isNaN(state.progress)) {
                const percent = calculateProgress(e.clientX, e.currentTarget)
                const result = converter(Math.floor((
                    trackRef.current!.duration / 100
                ) * percent))
                dispatch(playerActions.setHint(result))
                hintRef.current!.style.left =
                    e.clientX - e.currentTarget.getBoundingClientRect().left +
                    'px'
                hintRef.current!.hidden = false
            }
        }

        const closeHint = () => {
            hintRef.current!.hidden = true
        }

        useEffect(() => {
            trackRef.current!.volume = state.volume / 100
        }, [state.volume, trackRef])


        return (
            <div className={styles.player}>
                <audio ref={trackRef} onTimeUpdate={playingProgress}
                       onLoadedData={() => {
                           dispatch(playerActions.setDuration(converter(trackRef.current!.duration)))
                       }}
                       src={state.currentSrc}
                       preload="none" data-track_number={state.currentNumber}/>
                <div onClick={initPlayer} className={styles.play_block}>
                    <img
                        src={state.currentAlbum} alt="player_album"/>
                    {state.isPlaying ?
                        <i className={`fa fa-pause ${styles.pause}`}/> :
                        <i className={`fa fa-play ${styles.play}`}/>}
                </div>
                <div className={styles.arrows}>
                    <i className="fa fa-step-backward" onClick={onBackward}
                       aria-hidden="true"/>
                    <i className="fa fa-step-forward" onClick={onForward}
                       aria-hidden="true"/>
                </div>
                <div className={styles.progress_bar}>
                    <div className={styles.title_info}>
            <span
                className={styles.title}>{state.artist} - {state.title}</span>
                        <small>{state.currentSecond}
                            {/*{state.duration ? "/" + state.duration : "/0 : 00"}*/}
                        </small>
                    </div>
                    <div className={styles.progress_wrapper}>
                        <progress onClick={seekProgress} max="100"
                                  onMouseMove={showHint} onMouseLeave={closeHint}
                                  value={state.progress}>
                        </progress>

                        <small ref={hintRef}
                               className={styles.hint}>{state.hintTime}
                        </small>
                    </div>
                </div>

                <div className={styles.volume}>
                    {state.volume > 0 ?
                        <i className="fa fa-volume-up" aria-hidden="true"/> :
                        <i className="fa fa-volume-off" aria-hidden="true"/>}
                    <input type="range" onChange={onVolume}
                           value={state.volume}/>
                </div>
            </div>
        )
    })
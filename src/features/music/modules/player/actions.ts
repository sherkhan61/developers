


type SongInfoType = {
    currentSrc: string,
    currentAlbum: string,
    bgPhoto: string,
    artist: string,
    title: string
}

type ISetProgressAction = {
    payload: {
        progress?: number,
        currentSecond?: string
    }
}

export const playerActions = {
    nextSong: (payload: SongInfoType) => ({type: 'PLAYER/NEXT_SONG', payload} as const),
    setHint: (payload: string) => ({type: 'PLAYER/SET_HINT', payload} as const),
    toggleIsPlaying: (payload: boolean) => ({type: 'PLAYER/TOGGLE_IS_PLAYING', payload} as const),
    setDuration: (payload: string) => ({type: 'PLAYER/SET_DURATION', payload} as const),
    prevSong: (payload: SongInfoType) => ({type: 'PLAYER/PREV_SONG', payload} as const),
    setSong: (payload: SongInfoType & { currentNumber?: number }) => ({type: 'PLAYER/SET_SONG', payload} as const),
    setProgress: (payload: ISetProgressAction['payload']) => ({type: 'PLAYER/SET_PROGRESS', payload} as const),
    setVolume: (payload: number) => ({type: 'PLAYER/SET_VOLUME', payload} as const)
}

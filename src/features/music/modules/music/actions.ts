import {IMusicCategory, IMusicResponse, ITracks, musicApi} from '../../../../api/musicApi'
import {DispatchType} from '../../../../lib/store/root-reducer'


// ==========Action Creators======================


export const musicActions = {
    setMusicCharts: (charts: IMusicResponse) => ({type: 'MUSIC/SET_MUSIC_CHARTS', charts} as const),
    setSearchResults: (searchResults: IMusicCategory<ITracks> | null) => ({
        type: 'MUSIC/SET_SEARCH_RESULTS',
        searchResults
    } as const)
}


// =====================Thunk Creators====================

export const getMusicChart = () => (dispatch: DispatchType) => {
    musicApi.getMusicChart()
        .then((charts) => {
            dispatch(musicActions.setMusicCharts(charts as IMusicResponse))
        })
}

export const search = (query: string) => (dispatch: DispatchType) => {
    musicApi.search(query).then((searchResults) => {
        dispatch(musicActions.setSearchResults((searchResults as IMusicCategory<ITracks>)))
    })
}
import {IMusicCategory, IMusicResponse, ITracks} from '../../../../api/music-api'
import {InferActionsTypes} from '../../../../lib/store/root-reducer'
import {musicActions} from './actions'


export type ActionsTypes = InferActionsTypes<typeof musicActions>

type MusicStateType = {
  charts: null | IMusicResponse,
  searchResults : null | IMusicCategory<ITracks>
}

export const initialState: MusicStateType = {
  charts: null,
  searchResults: null
};

export const musicReducer = (state = initialState,
                        action: ActionsTypes): MusicStateType => {
  switch (action.type) {
    case 'MUSIC/SET_MUSIC_CHARTS':
      return {
        ...state,
        charts: action.charts
      };
    case 'MUSIC/SET_SEARCH_RESULTS':
      return {
        ...state,
        searchResults: action.searchResults
      };
    default:
      return state;
  }
};

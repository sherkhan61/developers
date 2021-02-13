import {InferActionsTypes} from '../../../../lib/store/root-reducer'
import {playerActions} from './actions'


export const initialState = {
    currentAlbum: '',
    bgPhoto: '',
    currentNumber: 0,
    currentSrc: '',
    progress: 0,
    volume: 50,
    duration: '',
    currentSecond: '',
    hintTime: '',
    isPlaying: false,
    artist: '',
    title: '',
}

export type PlayerStateType = typeof initialState;


export type ActionsTypes = InferActionsTypes<typeof playerActions>

export const playerReducer = (state: PlayerStateType, action: ActionsTypes) => {
    switch (action.type) {
        case 'PLAYER/NEXT_SONG':
            return {
                ...state, ...action.payload,
                currentNumber: state.currentNumber + 1
            }
        case 'PLAYER/PREV_SONG':
            return {
                ...state, ...action.payload,
                currentNumber: state.currentNumber - 1,
            }
        case 'PLAYER/SET_SONG':
            return {
                ...state, ...action.payload
            }
        case 'PLAYER/SET_PROGRESS':
            return {
                ...state, ...action.payload
            }
        case 'PLAYER/SET_VOLUME':
            return {
                ...state,
                volume: action.payload
            }
        case 'PLAYER/SET_DURATION':
            return {
                ...state,
                duration: action.payload
            }
        case 'PLAYER/SET_HINT':
            return {
                ...state,
                hintTime: action.payload
            }
        case 'PLAYER/TOGGLE_IS_PLAYING':
            return {
                ...state,
                isPlaying: action.payload
            }
        default:
            throw new Error()
    }
}
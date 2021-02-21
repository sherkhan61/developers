import {ChatMessageAPIType, StatusType} from '@api/socialApi'
import {chatActions} from '@chat/modules/actions'
import {BaseThunkType, InferActionsTypes} from '@store/root-reducer'
import {v1} from 'uuid'


type ChatMessageType = ChatMessageAPIType & {id: string}

let initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as StatusType
}

export type InitialStateType = typeof initialState;
export type ActionsType = InferActionsTypes<typeof chatActions>
export type ThunkType = BaseThunkType<ActionsType>



const chatReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/chat/MESSAGES_RECEVIED':
            return {
                ...state,
                messages: [...state.messages, ...action.payload.messages.map( m => ({...m, id: v1() }))]
                    .filter((m, index, array) => index >= array.length - 100)
            }
        case 'SN/chat/STATUS_CHANGED':
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state
    }
}

export default chatReducer
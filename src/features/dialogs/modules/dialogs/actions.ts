import {initialState} from './reducer'
import {InferActionsTypes} from '../../../../lib/store/root-reducer'






// ==========Action Creators======================


export type InitialStateType = typeof initialState
export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type ActionsType = InferActionsTypes<typeof actions>



export const actions = {
    sendMessage: (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND-MESSAGE', newMessageBody} as const)
}


// =====================Thunk Creators====================
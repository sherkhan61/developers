import {InferActionsTypes} from "./redux-store";


type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogsData: [
        {id: 1, name: 'Sherkhan'},
        {id: 2, name: 'Sabyrzhan'},
        {id: 3, name: 'Aldiyar'},
        {id: 4, name: 'Parasat'},
        {id: 5, name: 'Temirbolat'},
        {id: 6, name: 'Erbol'},
        {id: 7, name: 'Birzhan'},
    ] as Array<DialogType>,
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
    ] as Array<MessageType>,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>


const dialogsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SN/DIALOGS/SEND-MESSAGE':
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 3, message: body}]
            }
    }
    return state;
}
export const actions = {
    sendMessageCreate: (newMessageBody: string) => ({type: 'SN/DIALOGS/SEND-MESSAGE', newMessageBody} as const)
}


export default dialogsReducer
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: 'Sherkhan'},
        {id: 2, name: 'Sabyrzhan'},
        {id: 3, name: 'Aldiyar'},
        {id: 4, name: 'Parasat'},
        {id: 5, name: 'Temirbolat'},
        {id: 6, name: 'Erbol'},
        {id: 7, name: 'Birzhan'},
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'},
        {id: 3, message: 'Yo'},
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 3, message: body}]
            }
    }
    return state;
}
export const sendMessageCreate = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreate = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;
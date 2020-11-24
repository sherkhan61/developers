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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 3, message: body}]
            }
    }
    return state;
}
export const sendMessageCreate = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;
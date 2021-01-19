import profileReducer from "./profile-reducer";
import dialogsReducer from "./reducers/dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likeCount: 11},
                {id: 2, message: 'Hi, bro', likeCount: 12},
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
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
        },
        sidebar: { },
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.profilePage, action);

        this._callSubscriber(this._state);
    },

};

export default store;

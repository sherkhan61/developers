import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {InitialStateType} from '../../Redux/dialogs-reducer'
import {AddMessageFormRedux, NewMessageFormValuesType} from './AddMessageForm/AddMessageForm'


const Dialogs: React.FC<PropsType> = (props) => {
    let state = props.dialogsPage

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messagesData.map(m => <Message message={m.message} key={m.id}/>)

    let addNewMessage = (values: NewMessageFormValuesType) => {
        props.sendMessage(values.newMessageBody)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>

        </div>
    )
}


export default Dialogs

// types
type PropsType = {
    dialogsPage: InitialStateType,
    sendMessage: (messageText: string) => void
}
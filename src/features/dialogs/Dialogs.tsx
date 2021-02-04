import React from 'react'
import s from './Dialogs.module.css'
import {useAuthRedirect} from '../../features/authentication/hooks/useAuthRedirect'
import {actions} from '../../features/dialogs/modules/dialogs/actions'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../lib/store/root-reducer'
import DialogItem from './DialogItem/DialogItem'
import {AddMessageFormRedux, NewMessageFormValuesType} from './AddMessageForm/AddMessageForm'
import {Message} from './Message/Message'

const Dialogs: React.FC = () => {
    useAuthRedirect();
    const {dialogsPage} = useSelector((state: RootState) => (
        {
            dialogsPage: state.dialogsPage
        }
    ))
    const dispatch = useDispatch();

    let state = dialogsPage

    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messagesElements = state.messagesData.map(m => <Message message={m.message} key={m.id}/>)

    let addNewMessage = (values: NewMessageFormValuesType) => {
        dispatch(actions.sendMessage(values.newMessageBody))
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

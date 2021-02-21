import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '@store/root-reducer'
import {startMessagesListening, stopMessagesListening} from '@chat/modules/actions'
import {Messages} from '@chat/Messages'
import {AddMessagesForm} from '@chat/AddMessagesForm'




export type DialogsMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

const Chat: React.FC = () => {
    const dispatch = useDispatch()


    const status = useSelector((state: RootState) => state.chat.status)

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [])

    return (
        <div>
            {status === 'error' && <div>Some error occured. Please refresh the page</div>}
            <>
                <Messages />
                <AddMessagesForm />
            </>
        </div>
    )
}

export default Chat

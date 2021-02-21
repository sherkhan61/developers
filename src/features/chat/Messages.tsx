import React, {useEffect, useState} from 'react'
import Message from '@dialogs/Message'
import {DialogsMessageType} from '@dialogs/Dialogs'


const Messages: React.FC<{wsChannel: WebSocket | null}> = ({wsChannel}) => {
    const [messages, setMessages] = useState<DialogsMessageType[]>([])

    useEffect(() => {
        let messageHandler = (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data)
            setMessages(() => [...messages, ...newMessages])
        }
        wsChannel?.addEventListener('message', messageHandler)

        return () => {
            wsChannel?.removeEventListener('message', messageHandler)
        }
    }, [wsChannel, messages])

    return (
        <div style={{ height: '300px', overflow: 'auto' }}>
            {messages.map((m, index) => <Message key={index} message={m}/>)}
        </div>
    )
}

export default Messages

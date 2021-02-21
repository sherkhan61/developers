import React, {useEffect, useState} from 'react'
import Messages from '@dialogs/Messages'
import AddMessagesForm from '@dialogs/AddMessagesForm'


export type DialogsMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}

const Dialogs: React.FC = () => {
    const [wsChannel, setWsChannel] = useState<WebSocket | null>(null)

    useEffect(() => {
        let ws: WebSocket
        let closeHandler = () => {
            console.log('CLOSE WS')
            setTimeout(createChannel, 3000)
        }

        function createChannel() {
            ws?.removeEventListener('close', closeHandler)
            ws?.close()

            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
            ws.addEventListener('close', closeHandler)
            setWsChannel(ws)
        }
        createChannel()

        return () => {
            ws.removeEventListener('close', closeHandler)
            ws.close()
        }

    }, [])


    return (
        <div>
            <Messages wsChannel={wsChannel}/>
            <AddMessagesForm wsChannel={wsChannel}/>
        </div>
    )
}

export default Dialogs

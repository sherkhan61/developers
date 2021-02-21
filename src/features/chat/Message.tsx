import React from 'react'
import {DialogsMessageType} from '@dialogs/Dialogs'



const Message: React.FC<{message: DialogsMessageType}> = ({message}) => {
    return (
        <div>
            <img src={message.photo} alt='userPhoto' style={{width: '30px'}} /> <b>{message.userName}</b>
            <br/>
            {message.message}
            <hr/>
        </div>
    )
}

export default Message

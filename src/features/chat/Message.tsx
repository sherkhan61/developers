import React from 'react'
import {ChatMessageAPIType} from '@api/socialApi'



const Message: React.FC<{ message: ChatMessageAPIType }> = React.memo( ({message}) => {
    console.log(">>>>>>Message")
    return <div>
        <img src={message.photo} style={{width: '30px'}}/> <b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
})

export default Message

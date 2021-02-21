import React, {FC} from "react";
import {CommonTemplate} from '@ui/templates/Common'
import Chat from '@chat/Chat'


const ChatPage:FC = () => {
  return(
    <CommonTemplate>
      <Chat/>
    </CommonTemplate>
  )
};

export default ChatPage
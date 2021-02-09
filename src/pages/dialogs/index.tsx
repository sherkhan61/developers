import React, {FC} from "react";
import {CommonTemplate} from '../../ui/templates/Common'
import Dialogs from '../../features/dialogs/Dialogs'


const DialogsPage:FC = () => {
  return(
    <CommonTemplate>
      <Dialogs/>
    </CommonTemplate>
  )
};

export default DialogsPage
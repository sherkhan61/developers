import React, {FC} from "react";
import {CommonTemplate} from '../../ui/templates/Common'
import Profile from '../../features/profile/Profile'


export const ProfilePage: FC = () => {

  return (
    <CommonTemplate>
      <Profile/>
    </CommonTemplate>
  )
};
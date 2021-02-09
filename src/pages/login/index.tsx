import React from "react";
import {CommonTemplate} from '../../ui/templates/Common'
import {Login} from '../../features/authentication/Login'


const LoginPage = () => {
  return(
    <CommonTemplate>
      <Login/>
    </CommonTemplate>
  )
};

export default LoginPage
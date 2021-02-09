import React, {FC} from "react";
import styles from "./SignIn.module.scss"
import classes
  from "../organisms/UserAutnInfoBar/UserAuthInfoBar.module.scss";
import {NavLink} from "react-router-dom";


export const SignIn:FC = () => {
  return (
    <div className={styles.sign_in}>

      <NavLink className={classes.login_link}
        to={"/login"}>Login</NavLink>
      <i className="fa fa-sign-in"
        aria-hidden="true"/>
    </div>
  )
};
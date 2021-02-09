import React, {FC} from "react";
import {useDispatch} from "react-redux";
import styles from "./Logout.module.scss"
import {logout} from '../../../modules/authorization/actions'

interface ILogoutProps {
  isMobile: boolean
}

export const Logout: FC<ILogoutProps> = ({isMobile}) => {

  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());

  return <li className={(isMobile ? "" : styles.logout)}
      onClick={onLogout}>
    <i className="fa fa-sign-out" aria-hidden="true"/>Logout</li>
};
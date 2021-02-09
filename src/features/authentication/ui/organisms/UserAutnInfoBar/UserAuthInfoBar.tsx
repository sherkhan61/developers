import classes from "./UserAuthInfoBar.module.scss";
import React, {ReactNode} from "react";
import {shallowEqual, useSelector} from "react-redux";
import {RootState} from '../../../../../lib/store/root-reducer'
import {Logout} from '../../atoms/Logout/Logout'

interface IUserAuthInfoBarProps {
  onDropdown: () => void
  children: ReactNode
}

export const UserAuthInfoBar = React.forwardRef<HTMLDivElement, IUserAuthInfoBarProps>
(({onDropdown, children}, ref) => {

  const {userName, userPhoto} = useSelector((state: RootState) => (
      {
        userName: state.auth.user.fullName,
        userPhoto: state.auth.user.photos?.small
      }
  ), shallowEqual);

  const isMobile: boolean = document.documentElement.clientWidth <= 480;

  return <>
    {!isMobile ?
        <div ref={ref} className={classes.userInfo}
            onClick={onDropdown}>
        <span
            className={classes.userInfo_name}>{userName}</span>
          <div className={classes.userInfo_photo}>
            <img alt="user_photo"
                src={userPhoto as string}/>
          </div>
          {children}
        </div> :
        <Logout isMobile={isMobile}/>}
  </>
});
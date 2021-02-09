import React, {FC} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../lib/store/root-reducer";
import {FriendsBar} from './ui/moleculs/FriendsBar/FriendsBar'

export interface IFriendsProps {
  clearPage: () => void
}

export const Friends: FC<IFriendsProps> = ({clearPage}) => {
  const isMobile: boolean = document.documentElement.clientWidth <= 860;

  const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);

  return isAuth && !isMobile ?
      <FriendsBar clearPage={clearPage}/> : null
};
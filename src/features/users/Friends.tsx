import React, {FC} from "react";
import {useSelector} from "react-redux";
import {FriendsBar} from "@users/ui/moleculs/FriendsBar/FriendsBar";
import {RootState} from "../../lib/store/root-reducer";

export interface IFriendsProps {
  clearPage: () => void
}

export const Friends: FC<IFriendsProps> = ({clearPage}) => {
  const isMobile: boolean = document.documentElement.clientWidth <= 860;

  const isAuth: boolean = useSelector((state: RootState) => state.auth.isAuth);

  return isAuth && !isMobile ?
      <FriendsBar clearPage={clearPage}/> : null
};
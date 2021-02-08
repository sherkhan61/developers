import React, {FC} from "react";
import classes from "./Followbtn.module.scss"
import {usersActions} from "@users/modules/users";
import {useDispatch} from "react-redux";

interface IFollowBtnProps {
  followed: boolean
  isFollowing: Array<number>
  id: number
}

export const FollowBtn: FC<IFollowBtnProps> = ({followed, isFollowing, id}) => {

  const dispatch = useDispatch();

  const onFollow = (id: number) => {
    dispatch(usersActions.followUser(id));
  };

  const onUnFollow = (id: number) => {
    dispatch(usersActions.unFollowUser(id));
  };
  return (
      followed ? (
          <button className={classes.followBtn}
              disabled={isFollowing.some((item) => item === id)}
              onClick={() => {
                onUnFollow(id);
              }}>
            Unfollow
          </button>
      ) : (
          <button className={classes.followBtn}
              disabled={isFollowing.some((item) => item === id)}
              onClick={() => {
                onFollow(id);
              }}>
            Follow
          </button>
      )
  )
};
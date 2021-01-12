import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import { UserType } from "../../types/types";
import { UsersSearchForm } from "./UsersSearchForm";
import { FilterType } from "../../Redux/users-reducer";
import { useDispatch, useSelector } from "react-redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersFilter,
  getUsersPage,
} from "../../Redux/users-selectors";

const Users: React.FC<PropsType> = (props) => {
  // Props start
  const totalUsersCount = useSelector(getTotalUsersCount);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const users = useSelector(getUsersPage);
  const filter = useSelector(getUsersFilter);
  // Props end

  // Dispatch start
  const dispatch = useDispatch();
  // Dispatch end
  
  const onPageChanged = (pageNumber: number) => void

  return (
    <div>
      <UsersSearchForm onFilterChanged={props.onFilterChanged} />
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
      />
      <div>
        {users.map((u) => (
          <User
            user={u}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
            key={u.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;

// types
type PropsType = {
  totalUsersCount: number;
  pageSize: number;
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  onFilterChanged: (filter: FilterType) => void;
  users: Array<UserType>;
  followingInProgress: Array<number>;
  unfollow: (userId: number) => void;
  follow: (userId: number) => void;
};

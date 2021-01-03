import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";


const Users: React.FC <PropsType> = ({totalUsersCount,
                                         pageSize,
                                         currentPage,
                                         onPageChanged,
                                         users, ...props}) => {
    return (
        <div>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                       currentPage={currentPage} onPageChanged={onPageChanged}/>
            <div>
                {
                    users.map(u => <User user={u}
                                         followingInProgress={props.followingInProgress}
                                         unfollow={props.unfollow}
                                         follow={props.follow}
                                         key={u.id} />
                    )
                }
            </div>

        </div>
    )
}
export default Users;


// types
type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}
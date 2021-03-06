import React, {FC, useEffect} from 'react'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import classes from './Users.module.scss'
import {useLocation, useParams} from 'react-router'
import {RootState} from '@store/root-reducer'
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersPage
} from '@users/modules/users/selectors'
import {getUsers, search, usersActions} from '@users/modules/users/actions'
import {User} from '@users/ui/organisms/User/User'
import {Paginator} from '@ui/organisms/Paginator/Paginator'
import {Preloader} from '@ui/atoms/preloader/Preloader'


let isEmpty = (arr: Array<any>) => {
  for (let key in arr) {

    return false;
  }
  return true;
}

type IUsersParams = {
  term: string
}

export const Users: FC = () => {

  const path = useLocation().pathname;
  const isFriends = path === "/friends";
  const searchTerm = useParams<IUsersParams>().term;
  const {
    users: usersList, pageSize, totalUsersCount, currentPage, isFetching, isFollowing, isAuth
  } = useSelector((state: RootState) => (
      {
        users: getUsersPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getFollowingInProgress(state),
        isAuth: state.auth.isAuth
      }
  ), shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    if (path.startsWith("/search/")) {
      dispatch(search(searchTerm));
    } else {
      dispatch(getUsers(pageSize,
          currentPage,
          isFriends));
    }
  }, [currentPage, pageSize, dispatch, path, isFriends, searchTerm]);

  const onPageChanged = (currentPage: number): void => {
    dispatch(usersActions.setCurrentPage(currentPage))
  };


  const users = usersList.map((user) => {

    return (
        <User key={user.id} isAuth={isAuth}
            photo={user.photos.small}
            status={user.status}
            id={user.id}
            followed={user.followed}
            fullName={user.name}
            isFollowing={isFollowing}
        />
    );
  });

  return (
      <>
        {isFetching ?
            <Preloader/> :
            (
                <>
                  <div className={classes.users}>
                    {isEmpty(users) ?
                        <p className={classes.users_notFound}>Sorry,
                          nothing
                          found</p> :
                        users}

                  </div>
                  <Paginator totalUsersCount={totalUsersCount}
                      pageSize={pageSize} currentPage={currentPage}
                      onPageChanged={onPageChanged}/>
                </>
            )}
      </>
  );
};


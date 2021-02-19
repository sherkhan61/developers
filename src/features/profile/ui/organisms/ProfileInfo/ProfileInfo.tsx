import React, {ChangeEvent, FC, useEffect} from 'react'
import classes from './ProfileInfo.module.scss'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {RootState} from '@store/root-reducer'
import {followUser, isUserFollowed, savePhoto, unFollowUser} from '@profile/modules/profile/actions'
import {ProfileStatus} from '@profile/ui/atoms/ProfileStatus/ProfileStatus'
import {Link} from 'react-router-dom'
import {ProfileDescription} from '@profile/ui/molecules/ProfileDescription/ProfileDescription'
import {ProfileType} from '@api/socialApi'




type PropsType = {
  userId : number
  profile: ProfileType
  myAva_img: string
  authUserId: number
  isAuth: boolean
}
export const ProfileInfo:FC<PropsType> = ({userId, profile, authUserId, myAva_img, isAuth}) => {
  debugger
  const dispatch = useDispatch();

  const isOwner:boolean = userId === authUserId;

  const {followed, isFollowing} = useSelector((state:RootState) => {
    return {
      followed: state.profilePage.followed,
      isFollowing: state.profilePage.isFollowing
    }
}, shallowEqual);

  const onSaveFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files!.length) dispatch(savePhoto(e.target.files![0]));
  };

  useEffect(() => {
    if(isAuth) dispatch(isUserFollowed(userId));
  }, [dispatch, userId, isAuth]);


  return (
    <div className={classes.profileInfo_wrapper}>

      <div className={classes.userPhoto_block}>
        <label>
          <img alt="avatar"
            className={`${classes.userPhoto} ${isOwner &&
            classes.ownerPhoto}`} src={myAva_img}/>
          {isOwner &&
          <input hidden onChange={onSaveFile} type="file"/>}
        </label>
      </div>

      <section className={classes.profileInfo}>
        <div className={classes.userName_container}>
          <p className={classes.userName}>{profile.fullName}</p>
          <ProfileStatus isOwner={isOwner}/>

          <div className={classes.buttons}>
            {isOwner || <Link to={`/dialogs/${userId}`}>
            <button> Send
              message
            </button>
          </Link>}
            {isOwner || (
              followed ?
                <button disabled={isFollowing}
                  onClick={() => dispatch(unFollowUser())}>Unfollow</button> :
                <button disabled={isFollowing}
                  onClick={() => {
                    dispatch(followUser())
                  }}>Follow</button>
            )}
          </div>
        </div>
        <ProfileDescription profile={profile} isOwner={isOwner}/>
      </section>


    </div>
  );
};

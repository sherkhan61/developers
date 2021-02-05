import React, {FC, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import classes from './ProfileStatus.module.css'
import {RootState} from '../../../../../lib/store/root-reducer'
import {updateStatus} from '../../../modules/profile/actions'

type PropsType = {
  isOwner:boolean
}

export const ProfileStatus: FC<PropsType> = ({isOwner}) => {

  const userStatus = useSelector((state: RootState) => (
    state.profilePage.status
  ));

  let [status, setStatus] = useState<null | string>(null);
  let [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    setStatus(userStatus)
  }, [userStatus]);

  const dispatch = useDispatch();

  const onStatusChange = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    dispatch(updateStatus(e.target.value));
    setEditMode(false);
  };
  return (
    <div className={classes.profileStatus}>
      {isOwner && editMode ?
        <textarea
          className={classes.profileStatus_textarea} autoFocus={true}
          onChange={(e) => setStatus(e.target.value)}
          onBlur={onStatusChange}
          value={status as string}/> :
        <p style={isOwner ? {cursor: "pointer"} : {cursor: ""}} onClick={() => setEditMode(true)}>{userStatus || "no-" +
        " status"}</p>}
    </div>
  )
};

import React, {useEffect} from 'react'
import {useAuthRedirect} from '../authentication/hooks/useAuthRedirect'
import {useParams} from 'react-router'
import {shallowEqual, useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../lib/store/root-reducer'
import {getProfile, getStatus, profileActions} from './modules/profile/actions'
import avatarUndefined from '../../ui/assets/images/avatar-undefined.jpg'
import {ProfileInfo} from './ui/organisms/ProfileInfo/ProfileInfo'
import {Preloader} from '../../ui/atoms/preloader/Preloader'


type PathParamsType = {
    userId?: string
}


const Profile: React.FC = () => {

    useAuthRedirect();

    const selectedId = useParams<PathParamsType>().userId;
    const dispatch = useDispatch();
    const {profile, authUserId} = useSelector((state: RootState) => {
        return {
            profile: state.profilePage.profile,
            authUserId: state.auth.user.userId
        }
    }, shallowEqual);

    const isAuth = useSelector((state: RootState) => state.auth.isAuth);

    let userId = selectedId || authUserId;

    useEffect(() => {
        if (isAuth) {
            dispatch(getProfile(+userId!));
            dispatch(getStatus(+userId!));
        }
        return (() => {
            dispatch(profileActions.setUsersProfile(null))
        })
    }, [selectedId, dispatch, isAuth, userId]);

    return (
        <>
            {!profile ?
                <Preloader/> :
                (
                    <>
                        <ProfileInfo authUserId={authUserId as number}
                                     profile={profile}
                                     userId={userId as number}
                                     isAuth={isAuth}
                                     myAva_img={profile.photos?.small || avatarUndefined}
                        />
                    </>
                )}
        </>
    )
}

export default Profile
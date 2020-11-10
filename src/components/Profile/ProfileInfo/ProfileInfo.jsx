import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
        return (
            <div>
                <div>
                    <img
                        className={s.backgroundPicture}
                        src="https://media-cdn.tripadvisor.com/media/photo-s/19/e0/c6/ae/ideal-prime-beach.jpg"
                        alt="background-picture"
                    />
                </div>
                <div className={s.descriptionBlock}>
                    <img src={props.profile.photos.large}/>
                    ava + description
                </div>
            </div>
        )
}

;

export default ProfileInfo;

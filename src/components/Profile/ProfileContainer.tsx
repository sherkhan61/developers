 import React from "react";
import Profile from "./Profile";
import {getProfile, getStatus, savePhoto, saveProfile, updateStatus} from "../../Redux/profile-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
 import {AppStateType} from "../../Redux/redux-store";
 import {RouteComponentProps, WithRouterProps} from "react-router";
 import {ProfileType} from "../../types/types";





class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if(!userId) {
                this.props.history.push("/login");
            }
        }
        if (!userId) {
            console.error("Id should exist in URI params or in state ('authorizedUserId')")
        } else {
        this.props.getProfile(userId);
        this.props.getStatus(userId);
        }
    }


    componentDidMount() {
        this.refreshProfile();
    }
    componentDidUpdate(prevProps: PropsType, prevState: PropsType) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
        this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner = {!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}/>
        );
    }
};


let mapStateToProps = (state: AppStateType) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    })
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter,
    //withAuthRedirect //HOC
) (ProfileContainer);



// types start
type PropsType = MapStatePropsType & MapDispatchPropsType & RouteComponentProps<PathParamsType>
type MapStatePropsType = ReturnType<typeof mapStateToProps>
type MapDispatchPropsType = {
     getProfile: (userId: number) => void
     getStatus: (userId: number) => void
     updateStatus: (status: string) => void
     savePhoto: (file: File) => void
     saveProfile: (profile: ProfileType) => Promise<any>
}
type PathParamsType = {
     userId: string
}
 // types end

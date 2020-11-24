import React from "react";
import Profile from "./Profile";
import {getProfile, getStatus, updateStatus} from "../../Redux/profile-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        );
    }
};

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    //withAuthRedirect //HOC
) (ProfileContainer);

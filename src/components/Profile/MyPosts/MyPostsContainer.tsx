import React from 'react'
import MyPosts, {DispatchPropsType, MapPropsType} from './MyPosts'
import {connect} from 'react-redux'
import {AppStateType} from '../../../Redux/redux-store'
import {actions} from '../../../Redux/actions/profile-action'


let mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.postsData
    }
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
    addPost: actions.addPostActionCreate
})(MyPosts)


export default MyPostsContainer

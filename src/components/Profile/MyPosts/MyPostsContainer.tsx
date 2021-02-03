import React from 'react'
import MyPosts, {DispatchPropsType, MapPropsType} from './MyPosts'
import {connect} from 'react-redux'
import {actions} from '../../../Redux/actions/profile-action'
import {RootState} from '../../../lib/store/root-reducer'


let mapStateToProps = (state: RootState) => {
    return {
        posts: state.profilePage.postsData
    }
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, RootState>(mapStateToProps, {
    addPost: actions.addPostActionCreate
})(MyPosts)


export default MyPostsContainer

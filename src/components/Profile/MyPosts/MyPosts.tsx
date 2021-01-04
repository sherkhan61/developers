import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {AddPostFormValuesType, AddPostReduxForm} from './AddPostForm/AddPostForm'
import {PostType} from '../../../types/types'


const MyPost: React.FC<MapPropsType & DispatchPropsType> = (props) => {
    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = (values: AddPostFormValuesType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>
                My posts
            </h3>
            <AddPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    )
}


const MyPostMemorized = React.memo(MyPost)

export default MyPostMemorized


// types start
export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}
// types end

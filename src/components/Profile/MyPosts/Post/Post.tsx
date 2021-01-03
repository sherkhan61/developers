import React from "react";
import s from './Post.module.css';


const Post: React.FC<PropsType> = (props) => {
    return (
        <div className={s.item}>
            <img src="https://vokrug-tv.ru/pic/person/e/9/a/b/e9abb1b8929cede9f7058672f4b12556.jpeg"></img>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>

        </div>
    );
};

export default Post;


//types
type PropsType = {
    message: string
    likesCount: number
}
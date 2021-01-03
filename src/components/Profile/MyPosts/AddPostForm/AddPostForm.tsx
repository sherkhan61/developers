import {maxLengthCreator, required} from "../../../../utils/validators/validators";
import {InjectedFormProps, reduxForm} from "redux-form";
import {createField, Textarea} from "../../../common/FormsControls/FormsControls";
import React from "react";


const maxLength50 = maxLengthCreator(50);

const AddPostForm: React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<AddPostFormValuesTypeKeys>("", "newPostText", [required, maxLength50], Textarea)}
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm<AddPostFormValuesType, PropsType>({form: "addNewPostText"}) (AddPostForm);


// types start
type PropsType = {

}
export type AddPostFormValuesType = {
    newPostText: string
}
type AddPostFormValuesTypeKeys = Extract<keyof AddPostFormValuesType, string>
// types end
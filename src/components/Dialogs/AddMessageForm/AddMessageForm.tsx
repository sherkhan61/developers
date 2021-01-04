import React from 'react'
import {InjectedFormProps, reduxForm} from 'redux-form'
import {createField, Textarea} from '../../common/FormsControls/FormsControls'
import {maxLengthCreator, required} from '../../../utils/validators/validators'


const maxLength50 = maxLengthCreator(50)


const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType> & PropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<NewMessageFormValuesTypeKeys>(
                    'Enter your message',
                    'newMessageBody',
                    [required, maxLength50],
                    Textarea)}
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export const AddMessageFormRedux = reduxForm<NewMessageFormValuesType, PropsType>({form: 'dialogAddMessageForm'})(AddMessageForm)


// types
export type NewMessageFormValuesType = {
    newMessageBody: string
}
type NewMessageFormValuesTypeKeys = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}
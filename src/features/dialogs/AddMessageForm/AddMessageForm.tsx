import React from 'react'
import {InjectedFormProps, reduxForm} from 'redux-form'
import {maxLengthCreator, required} from '../../../utils/validators/validators'
import {createField, Textarea} from '../../../components/common/FormsControls/FormsControls'


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
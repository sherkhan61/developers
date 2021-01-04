import React from 'react'
import s from './ProfileInfo.module.css'
import {createField, Input, Textarea} from '../../common/FormsControls/FormsControls'
import {InjectedFormProps, reduxForm} from 'redux-form'
import {ProfileType} from '../../../types/types'


const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        {error && <div className={s.formSummaryError}>
            {error}
        </div>
        }
        <div>
            <b>Full name</b>: {createField<ProfileDataFormTypeKeys>('Full name', 'fullName', [], Input)}
        </div>
        <div>
            <b>Looking for a
                job</b>: {createField<ProfileDataFormTypeKeys>('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
        </div>

        <div>
            <b>My professional skills</b>:
            {createField<ProfileDataFormTypeKeys>('My professional skills', 'lookingForAJobDescription', [], Textarea)}
        </div>
        <div>
            <b>About me</b>:
            {createField<ProfileDataFormTypeKeys>('About me', 'aboutMe', [], Textarea)}
        </div>

        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={s.contact}>
                <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
            </div>
        })}
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm


// types
type PropsType = {
    profile: ProfileType
}
type ProfileDataFormTypeKeys = Extract<keyof ProfileType, string>
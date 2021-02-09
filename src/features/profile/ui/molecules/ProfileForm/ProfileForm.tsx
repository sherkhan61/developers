import React, {FC} from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import classes from './ProfileForm.module.scss'
import {saveProfile} from '../../../modules/profile/actions'
import {ProfileType} from '../../../../../api/social-api'

type PropsType = {
    profile: ProfileType
    closeEditMode: () => void
}

interface IProfileFormFields {
    // FullName: string
    // lookingForAJob: boolean
    // LookingForAJobDescription: string
    // AboutMe: string
    // contactsErr?: string
    // "contacts.github": string
    // "contacts.vk": string
    // "contacts.facebook": string
    // "contacts.instagram": string
    // "contacts.twitter": string
    // "contacts.website": string
    // "contacts.youtube": string
    // "contacts.mainLink": string
    [index: string]: string
}

export const ProfileForm: FC<PropsType> = ({profile: {
    contacts,
    lookingForAJob,
    lookingForAJobDescription,
    fullName}, closeEditMode}) => {

    const dispatch = useDispatch()

    const {register, handleSubmit, errors, trigger, setError} = useForm<IProfileFormFields>()

    const onSubmit = async (profileData: IProfileFormFields) => {

        let data = await dispatch(saveProfile(profileData))
        if (Array.isArray(data) && data.length > 0) {
            data.forEach(() => setError('contactsErr', {
                type: 'servererror',
                message: "Invalid Url Format"}))
        } else {
            closeEditMode()
        }


    }

    const contactItems = Object.entries(contacts!).map((item, index) => {

        return <p key={index} className={classes.contacts_item}>{item[0].charAt(0)
            .toUpperCase() + item[0].slice(1)}:
            <input className={classes.contacts_input}
                   onChange={() => trigger('contacts.' + item[0])}
                   ref={register({
                       maxLength: {
                           value: 20,
                           message: "ERROR"
                       }
                   })}
                   name={'contacts.' + item[0]}
                   defaultValue={item[1]}/>
            <p className={classes.error}>{errors.name}</p>

        </p>
    })


    return (
        <form className={classes.profileForm}
              onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.profileForm_close}
                 onClick={closeEditMode}>
                <i className="fa fa-times" aria-hidden="true"/>
                <small>close</small>
            </div>
            <section className={classes.name_wrapper}><p>Full Name:
                <input ref={register} placeholder={'Full Name'}
                       name={'FullName'}
                       defaultValue={fullName as string}/>
            </p>
                <p>Looking for a Job:
                    <select ref={register} name="lookingForAJob"
                            defaultValue={lookingForAJob ?
                                'yes' :
                                'no'}>
                        <option value={'true'}>Yes</option>
                        <option value={'false'}>No</option>
                    </select>
                </p>
            </section>
            <p>My professional skills:
                <input ref={register} name={'LookingForAJobDescription'}
                       defaultValue={lookingForAJobDescription as string}/>
            </p>
            <p>About Me:
                <input ref={register} name={'AboutMe'}
                       defaultValue='About me'/>
            </p>
            <p className={classes.error}>{errors.name}</p>
            <div className={classes.info_box}>{contactItems}</div>
            <button className={classes.editProfile_btn}>Save</button>

        </form>
    )
}
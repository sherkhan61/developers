import React from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import classes from './LoginForm.module.scss'
import {login} from '../../../modules/authorization/actions'

type ILoginFormProps = {
    captchaUrl: string | null
}


export const LoginForm: React.FC<ILoginFormProps> = ({captchaUrl}) => {

    const {register, errors, handleSubmit} = useForm();
    const dispatch = useDispatch();

    const onSubmit = (formData: any) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input name='email'
                        ref={register({
                            required: "Please  enter your email"
                        })}
                        placeholder='e-mail'/>
                        <span className={classes.span_error}>{errors.name}</span>
            </div>
            <div><input name='password'
                        ref={register({
                            required: "Please enter your password"
                        })}
                        type="password"
                        placeholder='password'
            />
                <span className={classes.span_error}>{errors.name}</span>
            </div>
            <div>
                <input name='rememberMe'
                       type="checkbox"/>
                <label htmlFor="rememberMe">Remember Me</label>
            </div>
            {captchaUrl ?
                <><img alt="captcha" src={captchaUrl}/>
                    <input name='captcha'
                           placeholder='Enter symbols'
                           ref={register({
                               required: "Please enter symbols"
                           })} type="text"/>
                    <span className={classes.span_error}>{errors.name}</span>
                    {errors.captcha && "Captcha is required"}
                </> :
                ""}
            <div>
                <p className={classes.span_error}>{errors.name}</p>
                <input
                    value={"Login"} type="submit"/>
            </div>
        </form>
    )
};
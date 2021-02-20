import React from 'react'
import {useSelector} from 'react-redux'
import {RootState} from '@store/root-reducer'
import {Redirect} from 'react-router-dom'
import {LoginForm} from '@auth/ui/organisms/LoginForm/LoginForm'


export const Login: React.FC = () => {
    const {isAuth, captchaUrl} = useSelector((state: RootState) => (
        {
            isAuth: state.auth.isAuth,
            captchaUrl: state.auth.captchaUrl
        }
    ))


    return isAuth ? <Redirect to={'/profile'}/> :
        (
            <div>
                <h1>Please, log in...</h1>
                <LoginForm captchaUrl={captchaUrl}/>
            </div>
        )

}
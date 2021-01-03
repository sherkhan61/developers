import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit} className={s.formContainer}>
            <h2>Login</h2>

            {createField ("email", "email", [required], Input)}
            {createField("password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", null, Input, {type: "checkbox"}, "remember me")}
            {/*<div className={s.formField}>
                <label form="email">Email</label>
                <Field placeholder="email"
                       name="email"
                       component="input"
                       validate={required}
                />
            </div>
            <div className={s.formField}>
                <label form="password">Password</label>
                <Field placeholder="password"
                       name="password"
                       component="input"
                       validate={required}
                       type="password"
                />
            </div>
            <div className={s.formField}>
                <label form="rememberMe">Remember me</label>
                <Field name="rememberMe"
                       component="input"
                       type="checkbox"
                       text="remember me"
                />
            </div>*/}



            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createField("symbols from image", "captcha", [required], Input )}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div className={s.formField}>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )

}
const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);

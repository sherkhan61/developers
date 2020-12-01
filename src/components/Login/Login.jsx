import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>

            {/*{createField("email", "email", [required], Input)}*/}
            <Field placeholder={"email"}
                   name={"email"}
                   component={Input}
                   validate={[required]}/>

            {/*{createField("password", "password", [required], Input, {type: "password"})}*/}
            <Field placeholder={"password"}
                   name={"password"}
                   component={Input}
                   type={"password"}
                   validate={[required]}/>

            {/*{createField(null, "rememberMe", null, Input, {type: "checkbox"}, "remember me")}*/}
            <Field name={"rememberMe"}
                   component={Input}
                   type={"checkbox"}/> remember me

            {error && <div className={s.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )

}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);

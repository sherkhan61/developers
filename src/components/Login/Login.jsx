import React from "react";
import {Field, reduxForm} from "redux-form";


const LoginForm = (props) => {
    return (
        <form>
            <div>
                <label>Login</label>
                <Field placeholder={"Login"} name={"Login"} component={"input"}/>
            </div>
            <div>
                <label>Password</label>
                <Field placeholder={"Password"} name={"Password"} component={"input"}/>
            </div>
            <div>
                <label>rememberMe</label>
                <Field name={"rememberMe"} component={"input"} type={"checkbox"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}



const LoginReduxForm = reduxForm({form: "login"})(LoginForm)

const Login = (props) => {
    return (
    <div>
        <h1>LOGIN</h1>
        <LoginReduxForm />
    </div>
    )

}

export default Login;

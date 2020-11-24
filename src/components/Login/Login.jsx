import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength10 = maxLengthCreator(10)
const LoginForm = (props) => {
    return (
        <form>
            <div>
                <Field placeholder={"Login"}
                       name={"Login"}
                       component={Input}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field placeholder={"Password"}
                       name={"Password"}
                       component={Input}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field name={"rememberMe"}
                       component={Input}
                       type={"checkbox"}/> remember me
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

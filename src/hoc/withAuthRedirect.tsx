import React from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {RootState} from '../lib/store/root-reducer'


let mapStateToPropsForRedirect = (state: RootState) => {
    return {
        isAuth: state.auth.isAuth
    }
}

type MapStatePropsType = {
    isAuth: boolean
}

// High Order Component HOC
export function withAuthRedirect<WCP> (WrappedComponent: React.ComponentType<WCP>) {
    const RedirectComponent: React.FC<MapStatePropsType> = (props) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Redirect to={"/login"}/>
        return <WrappedComponent {...restProps as WCP}/>
    }

    const ConnectAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent);

    return ConnectAuthRedirectComponent;
}
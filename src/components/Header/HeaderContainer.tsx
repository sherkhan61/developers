import React from 'react'
import Header, {DispatchPropsType, MapStatePropsType} from './Header'
import {logout} from '../../Redux/auth-reducer'
import {connect} from 'react-redux'
import {AppStateType} from '../../Redux/redux-store'


class HeaderContainer extends React.Component<MapStatePropsType & DispatchPropsType> {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect<MapStatePropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {logout})(HeaderContainer)

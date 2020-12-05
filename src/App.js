import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import loadable from '@loadable/component'
//import ProfileContainer from "./components/Profile/ProfileContainer";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./Redux/redux-store";



const DialogsContainer = loadable(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = loadable(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }


        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                    <Route path={'/users'} render={() => <UsersContainer/>}/>
                    <Route path={'/login'} render={() => <LoginPage/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                </div>
            </div>
        )


    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </HashRouter>
    )
}

export default SamuraiJSApp;
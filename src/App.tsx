import React, {Component} from 'react'
import './App.module.scss'
import {HashRouter} from 'react-router-dom'
import {connect, ConnectedProps} from 'react-redux'
import {Routes} from './Routes'
import {DispatchType, RootState} from '@store/root-reducer'
import {initializeApp} from '@auth/modules/initialization/actions'
import {Preloader} from '@ui/atoms/preloader/Preloader'



// ===================================
const MapStateToProps = (state: RootState) => (
    {
        initialized: state.init.initialized
    })

const mapDispatchToProps = (dispatch: DispatchType) => {
    return {
        initializeApp: () => dispatch(initializeApp()),
    }
}
const connector = connect(MapStateToProps, mapDispatchToProps)
type AppProps = ConnectedProps<typeof connector>


class App extends Component<AppProps> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <HashRouter>
                <Routes/>
            </HashRouter>
        )
    }
}


export default connector(App)
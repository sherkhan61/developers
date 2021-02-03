import React from 'react'
import Dialogs from './Dialogs'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {actions} from '../../Redux/actions/dialogs-action'
import {RootState} from '../../lib/store/root-reducer'


let mapStateToProps = (state: RootState) => {
    return {
        dialogsPage: state.dialogsPage
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, {...actions}),
    withAuthRedirect //HOC
)(Dialogs)
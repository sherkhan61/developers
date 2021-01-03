import React from "react";
import {actions} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}



export default compose<React.ComponentType>(
    connect(mapStateToProps, {...actions}),
    withAuthRedirect //HOC
) (Dialogs);
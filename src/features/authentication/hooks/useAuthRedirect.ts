import {useHistory} from "react-router";
import {RootState} from '../../../lib/store/root-reducer'
import {useSelector} from 'react-redux'


export const useAuthRedirect = () => {
    const history = useHistory();
    const isAuth = useSelector((state:RootState) => state.auth.isAuth);
    if (!isAuth) {

        history.push("/login");
    }
};
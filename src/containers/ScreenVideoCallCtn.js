import { connect } from 'react-redux'
import { NavigationActions } from "react-navigation";
import ScreenVideoCall from '../components/ScreenVideoCall'

function mapStateToProps (state, ownProps) {
    return state.userInfo;
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
//        onPressLogin: () => {
//            //dispatch(userLogin(ownProps.username, ownProps.password, dispatch));
//            dispatch(userLogin('hello', 'passwd', dispatch));
//        },
//
//        onUserNameInput: (name) => {
//            dispatch(loginUserNameInput(name));
//        }
    }
}

export default ScreenVideoCallCtn = connect(
    mapStateToProps,
    mapDispatchToProps
)(ScreenVideoCall)

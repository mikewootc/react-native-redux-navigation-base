import { connect }              from 'react-redux'
import { NavigationActions }    from "react-navigation";
import ScreenLogin              from '../components/ScreenLogin'
import {
    loginUserNameInput,
    loginPasswordInput,
    userLogin,
}                               from '../actions'
import {  }            from '../actions'

function mapStateToProps (state, ownProps) {
    return state.userInfo;
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onPressLogin: () => {
            dispatch(userLogin('hello', 'passwd', dispatch));
            //dispatch(
            //    NavigationActions.navigate({ routeName: 'VideoCall' })
            //);
        },

        onUserNameInput: (name) => {
            dispatch(loginUserNameInput(name));
        },

        onPasswordInput: (password) => {
            console.log('onPasswordInput');
            dispatch(loginPasswordInput(password));
        }
    }
}

export default ScreenLoginCtn = connect(
    mapStateToProps,
    mapDispatchToProps
)(ScreenLogin)

import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../containers/AppNavigatorCtn';
import { userLoginOk } from '../actions'

let initState = {
    userName: '',
    password: '',
    loggedIn: 'NONE', // 'OK', 'LOGGING', 'LOGGED_IN', 'NONE'
}

const userInfo = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_USER_NAME_INPUT':
            return {...state, userName: action.name};
        case 'LOGIN_PASSWORD_INPUT':
            return {...state, passover: action.passover};
        case 'USER_LOGIN_START':
            console.log('userInfo:', state);
            setTimeout(() => {
                action.dispatch(userLoginOk(action.dispatch));
            }, 1500);
            return {...state, loggedIn: 'LOGGING'};
        case 'USER_LOGIN_OK':
            setTimeout(() => {
                action.dispatch(
                    NavigationActions.navigate({ routeName: 'VideoCall' })
                );
            }, 0);

            return {...state, loggedIn: 'LOGGED_IN'};
        default:
            return state;
    }
}

export default userInfo;


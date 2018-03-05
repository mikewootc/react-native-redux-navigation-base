import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../containers/AppNavigatorCtn';

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));
console.log('########## initialState:', initialState);

const nav = (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    console.log('nav nextState:', nextState);


    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

export default nav;


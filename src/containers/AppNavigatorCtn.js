import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addNavigationHelpers } from "react-navigation";
import { StackNavigator } from 'react-navigation';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';

import { navigation } from '../actions'

import ScreenLogin from './ScreenLoginCtn';
//import ScreenAddDevice from '../components/ScreenAddDevice';


export const AppNavigator = StackNavigator({
  Login: {screen: ScreenLoginCtn},
//  VideoCall: {screen: ScreenVideoCall},
});

// -----------------------------------------------------------------------------
// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
export const navReduxMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);

// -----------------------------------------------------------------------------
const addListener = createReduxBoundAddListener("root");
class App extends Component {
  render() {
    return (
        <AppNavigator navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
            addListener,
        })} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav
});

export default AppNavigatorCtn = connect(mapStateToProps)(App);

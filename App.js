import React, { Component }             from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider }                     from 'react-redux'
import thunk                            from 'redux-thunk';

import AppNavigatorCtn from './src/containers/AppNavigatorCtn'
import { navReduxMiddleware } from './src/containers/AppNavigatorCtn'
import rootReducer from './src/reducers'


const logger = store => next => action => {
  console.log('====================')
  console.log('>>>dispatch:', action)
  let result = next(action)
  //console.log('<<<next state', Object.keys(store.getState()))
  console.log('--------------------')
  return result
}


const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunk, navReduxMiddleware),
);

export default class VideoCall extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigatorCtn />
            </Provider>
        )
    }
}

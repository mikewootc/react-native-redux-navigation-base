import { combineReducers } from 'redux'
import nav from './nav'
import userInfo from './userInfo'

const rootReducer = combineReducers({
    nav,
    userInfo,
});

export default rootReducer

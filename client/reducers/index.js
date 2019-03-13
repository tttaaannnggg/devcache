import { combineReducers } from 'redux';
import userReducer from './userReducer';
import snipReducer from './snipReducer';

export default combineReducers({
    user: userReducer,
    snip: snipReducer,
});
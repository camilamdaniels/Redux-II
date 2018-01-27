import { combineReducers } from 'redux';
import { friendsReducer } from './friendsReducer';
import { friendReducer } from './friendReducer';

export default combineReducers({
	friendReducer,
	friendsReducer
});
import { combineReducers } from 'redux';
import friendReducer from './friendReducer';

const friendsApp = combineReducers({
	friends: friendReducer
})

export default friendsApp;
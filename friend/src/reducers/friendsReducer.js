import * as actionTypes from '../actions';

const initialState = {
	friends: [],
	fetchingFriends: false,
	updatingFriend: false,
	addingFriend: false,
	deletingFriend: false,
	error: null
};

export const friendsReducer = (state=initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCHING_FRIENDS:
			return {...state, fetchingFriends: true};
		case actionTypes.FETCH_FRIENDS:
			return {...state, friends: action.payload, fetchingFriends: false};
		case actionTypes.UPDATING_FRIEND:
			return {...state, updatingFriend: true};
		case actionTypes.DELETING_FRIEND:
			return {...state, deletingFriend: true};
		case actionTypes.DELETE_FRIEND:
			return {...state, friends: action.payload, deletingFriend: false};
		case actionTypes.ADDING_FRIEND:
			return {...state, addingFriend: true};
		case actionTypes.ADD_FRIEND:
			return {...state, friends: action.payload, addingFriend: false};
		case actionTypes.ERROR:
			return {
				...state,
				fetchingFriends: false,
				addingFriend: false,
				deletingFriend: false,
				updatingFriend: false,
				error: action.payload
			};
		default:
			return state;
	}
};
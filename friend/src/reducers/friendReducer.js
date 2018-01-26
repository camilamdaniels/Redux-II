import { ADD_FRIEND, DELETE_FRIEND, UPDATE_FRIEND, FETCH_FRIENDS } from '../actions/index';

// totally guessing about the initial state thing
// vaguely remember this happening in videos


// so we're going to have to use axios to grab the original friend data
// i'm not sure if we do that here or not. again i need to review the todo list example to figure it out

const initialState = {
	fetchingFriends: false,
	friendsFetched: false,
	friendsSaved: false,
	savingFriends: false,
	updatingFriend: false,
	friendUpdated: false,
	deletingFriend: false,
	friends: [],
	error: null
}

export default (state=initialState, action) => {
	switch (action.type) {
		case ADD_FRIEND:
			return (
				state.friends.concat(action.payload)
			);
		case DELETE_FRIEND: 
			return (
				null
			);
		case UPDATE_FRIEND:
			return (
				// FILL IN FUNCTIONALITY HERE
				state.friends.concat(action.payload)
			);
		case FETCH_FRIENDS:
			return (
				state.friends
			);
		default:
			return state.friends;
	}
};
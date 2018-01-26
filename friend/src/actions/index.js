import axios from 'axios';
export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';
export const FETCH_FRIENDS = 'FETCH_FRIENDS';

// idk what a payload is, idk if a payload is needed
// i'll read up on it then come back and modify this code

const friends = axios.get('http://localhost:5000/friends');

export const addFriend = (friend) => {
	return {
		type: ADD_FRIEND,
		payload: friend
	};
};

export const deleteFriend = (friend) => {
	return {
		type: DELETE_FRIEND,
		payload: friend
	};
};

export const updateFriend = (friend) => {
	return {
		type: UPDATE_FRIEND,
		payload: friend
	};
};

export const fetchFriends = (friends) => {
	return {
		type: FETCH_FRIENDS,
		payload: friends
	};
};


// we also need to be able to delete a friend
// we need to be able to update the information stored about an existing friend
// we also need to be able to fetch friend data
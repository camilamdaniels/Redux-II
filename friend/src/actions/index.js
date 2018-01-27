import axios from 'axios';

export const ADD_FRIEND = 'ADD_FRIEND';
export const ADDING_FRIEND = 'ADDING_FRIEND';

export const DELETE_FRIEND = 'DELETE_FRIEND';
export const DELETING_FRIEND = 'DELETING_FRIEND';

export const UPDATING_FRIEND = 'UPDATING_FRIEND';
export const UPDATE_FRIEND = 'UPDATE_FRIEND';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const FETCH_FRIENDS = 'FETCH_FRIENDS';

export const FRIEND = 'FRIEND';
export const TOGGLE_UPDATE_FRIEND = 'TOGGLE_UPDATE_FRIEND';

export const ERROR = 'ERROR';

// idk what a payload is, idk if a payload is needed
// i'll read up on it then come back and modify this code
const URL = 'http://localhost:5000/api/friends';

export const addFriend = (friend) => {
	const newFriend = axios.post(`${URL}/create`, friend);
	return dispatch => {
		dispatch({type: ADDING_FRIEND});
		newFriend
			.then(({data}) => {
				dispatch({type: ADD_FRIEND, payload: data});
			})
			.catch(err => {
				dispatch({type: ERROR, payload: err});
			});
	};
};

export const deleteFriend = (id) => {
	const deletedFriend = axios.delete(`${URL}/delete`, {data: { id }});
	return dispatch => {
		dispatch({type: DELETING_FRIEND});
		deletedFriend
			.then(({data}) => {
				dispatch({type: DELETE_FRIEND, payload: data});
				dispatch({type: FRIEND, payload: {} });
			})
			.catch(err => {
				dispatch({type: ERROR, payload: err});
			});
	};
};

export const updateFriend = (friend) => {
	return {
		type: FRIEND,
		payload: friend
	};
};

export const toggleShowUpdate = () => {
	return {
		type: TOGGLE_UPDATE_FRIEND
	};
};

export const fetchFriends = () => {
	const friends = axios.get(`${URL}/get`);
	return dispatch => {
		dispatch({type: FETCHING_FRIENDS});
		friends.then(response => {
			dispatch({type: FETCH_FRIENDS, payload: response.data});
		})
		.catch(err => {
			dispatch({type: ERROR, payload: err})
		});
	};
};


// we also need to be able to delete a friend
// we need to be able to update the information stored about an existing friend
// we also need to be able to fetch friend data
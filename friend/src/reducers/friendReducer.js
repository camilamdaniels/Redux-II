import * as actionTypes from '../actions';

const initialState = {
	friendSelected: {},
	showUpdate: false
};

export const friendReducer = (state=initialState, action) => {
	switch (action.type) {
		case actionTypes.FRIEND:
			return {...state, friendSelected: action.payload, showUpdate: false};
		case actionTypes.TOGGLE_UPDATE_FRIEND:
			return {...state, showUpdate: !state.showUpdate};
		default:
			return state;
	}
}
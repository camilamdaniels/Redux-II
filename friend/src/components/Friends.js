// i think we'll be using this file to display the full list of friends. 
// maybe it should only consist of a render function? to render the friends component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions';
import Friend from './Friend';

// the implementation is inaccurate! it is a reflection of my current level of understanding
// i have to figure out how to access the data stored on state in order to render a list of friends
// i may have to use a map function so that i render a new div for each friend stored on props

export default (props) => {
	const friends = props.friends.map((friend, i) => <Friend friend={friend} key={i} index={i}/>);
	return (
		<ul>
			{ friends }
		</ul>
	);
};

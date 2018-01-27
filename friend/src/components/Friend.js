import React from 'react';

export default function Friend(props) {
	return (
		<div>
			<h4>{props.selected.name}</h4>
			<div>{props.selected.age}</div>
			<div>{props.selected.email}</div>
			<button onClick={() => props.handleDeleteFriend()}>
				{`Delete ${props.selected.name}`}
			</button>
		</div>
	);
}
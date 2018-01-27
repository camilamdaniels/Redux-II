import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Friend from './Friend';
import { connect } from 'react-redux';
import { deleteFriend, updateFriend, toggleShowUpdate } from '../actions';
import UpdateFriendForm from './UpdateFriendForm';

class Friends extends Component {
	handleDeleteFriend = () => { 
		const { id } = this.props.friendSelected;
		this.props.deleteFriend(id);
	}

	handleShowFriend = friend => {
		this.props.updateFriend(friend);
	}

	toggleShowUpdate = () => {
		this.props.toggleShowUpdate();
	}

	render() {
		return (
			<div>
				<ul>
					{this.props.friends.map(friend => {
						return (
							<li onClick={() => this.handleShowFriend(friend)} key={friend.id}>
								{friend.name}
							</li>
						);
					})}
				</ul>
				{Object.keys(this.props.friendSelected).length > 0 ? (
					<Friend 
						handleShowFriend={this.handleShowFriend}
						toggleShowUpdate={this.toggleShowUpdate}
						handleDeleteFriend={this.handleDeleteFriend}
						selected={this.props.friendSelected}
					/>
				) : null}
				{this.props.showUpdate ? (
					<UpdateFriendForm friend={this.props.friendSelected} />
					) : null}
				{this.props.deletingFriend ? (
					<img src={logo} className="App-logo" alt="logo"/>
					) : null}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		deletingFriend: state.friendsReducer.deletingFriend,
		error: state.friendsReducer.error,
		showUpdate: state.friendReducer.showUpdate,
		friendSelected: state.friendReducer.friendSelected
	};
};

export default connect(mapStateToProps, {
	deleteFriend,
	updateFriend,
	toggleShowUpdate
})(Friends);
// so in this component we are going to be rendering a form
// this form is going to allow you to create a new friend
// the form should have 4 input fields: first name, last name, age and email

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions/index';

class CreateFriendForm extends Component {
	// figure out what to set the value equal to
	// referencing the todo list app should show you how to do this
	// remember this field is dynamis and depends on user input
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			age: '',
			email: ''
		};
		this.addFriend = this.addFriend.bind(this);
		this.updateName = this.updateName.bind(this);
		this.updateAge = this.updateAge.bind(this);
		this.updateEmail = this.updateEmail.bind(this);
	}

	addFriend(event) {
		event.preventDefault();
		this.props.addFriend({
			name: this.state.name,
			age: this.state.age,
			email: this.state.email
		});
		this.setState({
			name: '',
			age: '',
			email: ''
		});
	}

	updateName(event) {
		this.setState({
			name: event.target.value
		});
	}

	updateAge(event) {
		this.setState({
			age: event.target.value
		});
	}

	updateEmail(event) {
		this.setState({
			email: event.target.value
		});
	}

	render() {
		return (
			<form onSubmit={() => this.addFriend}>
				<input type="text" value={this.state.name} placeholder="Name" onChange={this.updateName}/>
				<input type="text" value={this.state.age} placeholder="Age" onChange={this.updateAge}/>
				<input type="text" value={this.state.email} placeholder="Email" onChange={this.updateEmail}/>
				<input type="submit" value="Submit"/>
			</form>
		)
	}
}

export default CreateFriendForm;

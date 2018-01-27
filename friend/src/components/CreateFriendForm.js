// so in this component we are going to be rendering a form
// this form is going to allow you to create a new friend
// the form should have 4 input fields: first name, last name, age and email

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriend } from '../actions/index';

class CreateFriendForm extends Component {
	state = {
		name: '',
		age: '',
		email: ''
	};

	handleInputChange = event => {
		this.setState({[event.target.name] : event.target.value});
	};

	handleAddFriend = _ => {
		const { name, age, email } = this.state;
		this.props.addFriend({ name, age, email});
		this.setState({name: '', age: '', email: ''});
	};

	render() {
		return (
			<form>
				<input 
					type="text" 
					value={this.state.name} 
					placeholder="Name" 
					onChange={this.handleInputChange}
					name="name"
					/>
				<input 
					type="text" 
					value={this.state.age} 
					placeholder="Age" 
					onChange={this.handleInputChange}
					name="age"
					/>
				<input 
					type="text" 
					value={this.state.email} 
					placeholder="Email" 
					onChange={this.handleInputChange}
					name="email"
					/>
				<input 
					type="submit" 
					value="Add New Friend" 
					onClick={() => this.handleAddFriend()}/>
			</form>
		)
	}
}

const mapStateToProps = state => {
	return {
		error: state.error,
		addingFriend: state.addingFriend
	};
};

export default connect(mapStateToProps, { addFriend })(CreateFriendForm);

// finally understand what this file is for
// this allows a user to update the information recorded about a friend they already have
// basic functionality is very similar to the createfriendform class
// key differences include:
	// user may not want to update all the information about a friend 
		// this means i will have to inject some conditional logic that updates the appropriate field depending on a user response
		// so when i actually define this function in the actions file i have to keep that in mind
		// i might have to create a series of buttons: one for updating email, age, first name then last name
		// then depending on the button clicked the appropriate field will be updated
	// instead i will have one input field with three buttons, as opposed to 4 input fields and one button

	import React, { Component } from 'react';
	import { connect } from 'react-redux';
	import { updateFriend } from '../actions/index';

	class UpdateFriendForm extends Component {
		// figure out what to set the value equal to
		// referencing the todo list app should show you how to do this
		// remember this field is dynamic and depends on user input
		
		// I THINK WE ARE GOING TO HAVE TO SET THE STATE OBJECT TO AN EXISTING FRIEND
		// I'M NOT SURE HOW TO WIRE UP THE APPROPRIATE FUNCTIONALITY THAT WILL ALLOW THE USER TO SUBMIT INPUT

		constructor(props) {
			super(props);
			this.state = {
				name: '',
				age: '',
				email: ''
			}
		}

		updateFriend(event) {
			event.preventDefault();
			this.props.updateFriend({
				name: this.state.name,
				age: this.state.age,
				email: this.state.email
			});
			this.setState({
				name: '',
				age: '',
				email: ''
			})
		}

		updateName(event) {
			this.setState({
				name: event.target.value
			});
		};

		updateAge(event) {
			this.setState({
				age: event.target.value
			});
		};

		updateEmail(event) {
			this.setState({
				email: event.target.value
			});
		};

		render() {
			return (
				<form onSubmit={() => this.updateFriend}>
					<input type="text" value={this.state.name} placeholder="Name" onChange={this.updateName}/>
					<input type="text" value={this.state.age} placeholder="Age" onChange={this.updateAge}/>
					<input type="text" value={this.state.email} placeholder="Email" onChange={this.updateEmail}/>
					<input type="submit" value="Submit"/>
				</form>	
			)
		}
	}

export default UpdateFriendForm;
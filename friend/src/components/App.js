import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Friends from './Friends.js';
import CreateFriendForm from './CreateFriendForm.js';
import { connect } from 'react-redux';
import { fetchFriends } from '../actions/index.js';

class App extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <div>
        <h1>Camila's App</h1>
        <CreateFriendForm />
        {this.props.error ? <h3>Error Fetching Friends</h3> : null}
        <div>
          {this.props.gettingFriends ? (
            <img src={logo} className="App-logo" alt="logo" />
            ) : (
              <Friends friends={this.props.friends} />
              )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { friendsReducer } = state;
  return {
    friends: friendsReducer.friends,
    error: friendsReducer.error,
    gettingFriends: friendsReducer.gettingFriends
  };
};

export default connect(mapStateToProps, { fetchFriends })(App);

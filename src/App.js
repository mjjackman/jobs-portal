import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserView from './components/userView';
import User from './models/user';

class App extends Component {
  render() {
    var user = new User({
      firstName: 'Joe',
      lastName: 'Perkins'
    });

    return (
      <UserView user= { user } />
    );
  }
}

export default App;

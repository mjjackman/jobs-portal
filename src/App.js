import React, { Component } from 'react';
import 'normalize.css';
import './css/app.css';
import UserView from './components/userView';
import User from './models/user';
import ProjectView from './components/projectView';
import Project from './models/project';

class App extends Component {

  componentDidMount() {
    fetch('http://localhost:10524/users', {
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json', 
        'Access-Control-Allow-Origin': 'http://localhost:10524'
      }
    }).then((response) => {
      console.log(response);
      return response.json();
    });
  }
  render() {
    var user;
    var project;

    project = new Project({
      projectName: 'Around the world'
    });

    if(localStorage.getItem(1) !== null) {
      user = new User(JSON.parse(localStorage.getItem(1)));

    } else {

      user = new User({
        firstName: 'Brian',
        lastName: 'Johnson',
        bio: 'Full Stack Web Developer from London, UK',
        tagline: 'Here I am'
      });

      
    }

    return (
      <div>
        <UserView user= { user } />
        <ProjectView project= { project } />
      </div>
    );
  }
}

export default App;


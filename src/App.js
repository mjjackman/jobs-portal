import React, { Component } from 'react';
import 'normalize.css';
import './css/app.css';
import UserView from './components/userView';
import User from './models/user';
import ProjectView from './components/projectView';
import Project from './models/project';

class App extends Component {
  render() {
    var user;
    var project;

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

    if(localStorage.getItem(1) !== null) {
      project = new Project(JSON.parse(localStorage.getItem(1)));
    } else {
      project = new Project({
        projectName: 'Around the world',
        projectUrl: 'www.http://blabla.com',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        user_id: user.id
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


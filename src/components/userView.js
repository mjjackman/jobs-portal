import React, { Component } from 'react';

class UserView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: <ShowUser userView={this} />,
      user: this.props.user
    };

    this.edit = this.edit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:4000/users', {
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json', 
        'Access-Control-Allow-Origin': 'http://localhost:4000'
      }
    }).then((response) => {
      return response.json();
    }).then((json_response) => {
      this.setUser(json_response[0]);
    });
  }

  setUser(jsonResponse) {
    var user = this.state.user;
    user.update(jsonResponse); 
    this.setState({
      user: user,
      view: <ShowUser userView={this} />
    });
  }  

  edit() {
    this.setState( {
      view: <EditUser userView={this} />
    });
  }


  render() {
    return <div className="user-view">
      { this.state.view }
    </div>;
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      var key = event.target.name;
      var newName = event.target.value;
      var modifiedUser = this.state.user;
      modifiedUser[key] = newName;
      this.setState({ user: modifiedUser });
      this.props.user[key] = newName;
      this.setState({view: <ShowUser userView={this} />})
      this.props.user.save();
    }
  }
}

class ShowUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userView: this.props.userView
    }
  }

  render() {
     return (
      <div className="heading">
        <div className="profileImage">
          <img className="face" src="face.jpg" alt="face" ></img>
        </div>
        <div className="name">
          <h2 onDoubleClick={this.props.userView.edit}>{ this.state.userView.state.user.fullName() } </h2>
          <h3 onDoubleClick={this.props.userView.edit}>{ this.state.userView.state.user.bio}</h3>
          <h3 onDoubleClick={this.props.userView.edit}>{ this.state.userView.state.user.tagLine}</h3>
        </div>
      </div>)
  }
}

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userView: this.props.userView
    }
  }
  render() {
    return <div onKeyPress={this.state.userView.handleKeyPress}>
      <input className='edit-field' name="firstName" defaultValue={ this.state.userView.state.user.firstName } />
      <input className='edit-field' name="lastName" defaultValue={ this.state.userView.state.user.lastName } />
      <input className='bio' name="bio" defaultValue={ this.state.userView.state.user.bio } />
      <input className='tagLine' name='tagLine' defaultValue={this.state.userView.state.user.tagLine} />
    </div>
  }
}

export default UserView;
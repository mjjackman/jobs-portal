import React, { Component } from 'react';

class UserView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: <ShowUser user={ this.props.user } userView={this} />,
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
      bio: this.props.user.bio,
      tagline: this.props.user.tagline
    };

    this.edit = this.edit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  edit() {
    var user = this.props.user;
    this.setState( {
      view: <EditUser user={ user } view={this} />
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
      this.setState({ [key]: newName});
      this.props.user[key] = newName;
      this.setState({view: <ShowUser user={ this.props.user } userView={this} />})
      this.props.user.save();
    }
  }
}

class ShowUser extends Component {
  render() {
     return (
      <div className="heading">
        <div className="profileImage">
          <img className="face" src="face.jpg" alt="face" ></img>
        </div>
        <div className="name">
          <h2 onDoubleClick={this.props.userView.edit}>{ this.props.user.fullName() } </h2>
          <h3 onDoubleClick={this.props.userView.edit}>{ this.props.user.bio}</h3>
          <h3 onDoubleClick={this.props.userView.edit}>{this.props.user.tagline}</h3>
        </div>
      </div>)
  }
}

class EditUser extends Component {
  render() {
    return <div onKeyPress={this.props.view.handleKeyPress}>
      <input className='edit-field' name="firstName" defaultValue={ this.props.user.firstName } />
      <input className='edit-field' name="lastName" defaultValue={ this.props.user.lastName } />
      <input className='bio' name="bio" defaultValue={ this.props.user.bio } />
      <input className='tagline' name='tagline' defaultValue={this.props.user.tagline} />
    </div>
  }
}

export default UserView;
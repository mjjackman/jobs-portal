import React, { Component } from 'react';

class ShowUser extends Component {
  render() {
    return <h2 onDoubleClick={this.props.view.edit}>{ this.props.user.fullName() }</h2>;
  }
}

class EditUser extends Component {
  render() {
    return <div>
      <input className='edit-field' value={ this.props.user.firstName } />
      <input className='edit-field' value={ this.props.user.lastName } />
    </div>
  }
}

class UserView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: <ShowUser user={ this.props.user } view={this} />
    };

    this.edit = this.edit.bind(this);
  }

  edit() {
    this.setState( {
      view: <EditUser user={ this.props.user } />
    });
  }

  render() {
    return <div className="user-view">
      { this.state.view }
    </div>;
  }
}

export default UserView;
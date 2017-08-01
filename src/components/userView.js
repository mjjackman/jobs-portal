import React, { Component } from 'react';

class UserView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      view: 'show'
    };

    this.edit = this.edit.bind(this);
  }

  edit() {
    this.setState( {
      view: 'edit'
    });
  }

  render() {
    var view;

    if(this.state.view === 'show') {
      view = <h2 onDoubleClick={this.edit}>{ this.props.user.fullName() }</h2>;
    } else {
      view = <div>
          <input className='edit-field' value={ this.props.user.firstName } />
          <input className='edit-field' value={ this.props.user.lastName } />
        </div>;
    }

    return <div className="user-view">
      { view }
    </div>;
  }

}

export default UserView;
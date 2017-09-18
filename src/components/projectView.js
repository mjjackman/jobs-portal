import React, { Component } from 'react';

class ProjectView extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      view: <ShowProject projectView={this} />,
      project: this.props.project
    });
    this.edit = this.edit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  };

  componentDidMount() {
    fetch('http://localhost:4000/projects/' + this.props.project.user_id, {
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
        'accepts': 'application/json', 
        'Access-Control-Allow-Origin': 'http://localhost:4000'
      }
    }).then((response) => {
    return response.json();
    }).then((json_response) => {
      for (var i = 0; i < json_response.length; i++) {
        this.setProject(json_response[i]);
      }
    });
  }

  setProject(jsonResponse) {
    var project = this.state.project;
    project.update(jsonResponse); 
    this.setState({
      project: project,
      view: <ShowProject projectView={this} />
    });
  }

  edit() {
    this.setState( {
      view: <EditProject projectView={this} />
    });
  }

  render() {
    return <div className="project-view">
      { this.state.view }
    </div>;
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      debugger;
      var key = event.target.name;
      var newName = event.target.value;
      var modifiedProject = this.state.project;
      modifiedProject[key] = newName;
      this.setState({ project: modifiedProject });
      this.props.project[key] = newName;
      this.setState({view: <ShowProject projectView={this} />})
      this.props.project.save();
    }
  }
}

class ShowProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectView: this.props.projectView
    }
  }

   render() {
     return (
      <div className="project">
        <div className="project-image">
          <img src="project.jpg" alt="project" className="p-image"></img>
        </div>
        <h2 className="project-name" onDoubleClick={this.props.projectView.edit}>{ this.state.projectView.state.project.projectName }</h2>
        <a className="project-url" href="www.http://blabla.com" onDoubleClick={this.props.projectView.edit}>{ this.state.projectView.state.project.projectUrl }</a>
        <div className="description-box">
          <p className="description" onDoubleClick={this.props.projectView.edit}>{ this.state.projectView.state.project.description }</p>
        </div>
      </div>)
  }
}

class EditProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectView: this.props.projectView
    }
  }
  render() {
    return <div onKeyPress={this.state.projectView.handleKeyPress}>
      <input className='edit-field' name="projectName" defaultValue={ this.state.projectView.state.project.projectName } />
      <input className='edit-field' name="projectUrl" defaultValue={ this.state.projectView.state.project.projectUrl } />
      <textarea className='edit-field' name="description" defaultValue={ this.state.projectView.state.project.description } />
    </div>
  }
}

export default ProjectView;
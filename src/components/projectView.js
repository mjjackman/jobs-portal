import React, { Component } from 'react';

class ProjectView extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      project: this.props.project
    });
  };

  render() {
    return (
      <div className="project-view">
        <h2>{ this.state.project.projectName }</h2>
      </div>
    );
  }
}

export default ProjectView;
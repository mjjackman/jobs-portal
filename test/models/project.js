import { expect } from 'chai';
import Project from '../../src/models/project';

describe('Project', function() {
  var project;

  beforeEach(function() {
    project = new Project({
      projectName: 'Around The World in 20 days'
    });
  });

  it('provides the projectName', function() {
    expect(project.projectName).to.eq('Around The World in 20 days')
  });
});
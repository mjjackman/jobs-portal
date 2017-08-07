import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import ProjectView from '../../src/components/projectView';
import Project from '../../src/models/project';

describe("projectView component", function() {
  var component;
  var project;

  beforeEach(function() {
    project = new Project({
      projectName: 'Around The World in 20 days'
    });
  });

  describe("render", function() {
    it("creates a div with a class name of project-view", function() {
      component = shallow(<ProjectView project={ project } />);
      expect(component.is("div")).to.eq(true);
      expect(component.hasClass("project-view")).to.eq(true);
    });
  });
});
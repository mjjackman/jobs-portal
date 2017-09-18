import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme';
import ProjectView from '../../src/components/projectView';
import Project from '../../src/models/project';

describe("projectView component", function() {
  var component;
  var project;

  beforeEach(function() {
    project = new Project({
      projectName: 'Gravy Train',
      projectUrl: 'www.http://blabla.com'
    });
  });

    describe("render", function() {
    it("creates a div with a class name of project-view", function() {
      component = shallow(<ProjectView project={ project } />);
      expect(component.is("div")).to.eq(true);
      expect(component.hasClass("project-view")).to.eq(true);
    });

    it("displays the project's name", function() {
      component = render(<ProjectView project={ project } />);
      expect(component.find('h2').length).to.eq(1);
      expect(component.find('h2').html()).contains('Gravy Train');
    });
  });

  describe("editing name", function() {
    beforeEach(function() {
      component = mount(<ProjectView project={ project } />);
      component.find("h2").last().simulate("dblclick");
    });

    it("displays the project name and project url in edit boxes for the project to change", function() {
      const inputs = component.find("input.edit-field");
      expect(inputs).to.have.length(2);
      expect(inputs.first().node.value).to.eq('Gravy Train');
      expect(inputs.last().node.value).to.eq('www.http://blabla.com');
    });
  });
});
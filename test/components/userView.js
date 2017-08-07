
import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import UserView from '../../src/components/userView';
import User from '../../src/models/user';

describe("userView component", function() {
  var component;
  var user;

  beforeEach(function() {
    user = new User({
      firstName: 'Brian',
      lastName: 'Johnson'
    });
  });

  describe("render", function() {
    it("creates a div with a class name of user-view", function() {
      component = shallow(<UserView user={ user } />);
      expect(component.is("div")).to.eq(true);
      expect(component.hasClass("user-view")).to.eq(true);
    });

    it("displays the user's name in a heading", function() {
      component = mount(<UserView user={ user } />);
      expect(component.find('h2').length).to.eq(1);
      expect(component.find('h2').html()).contains('Brian Johnson');
    });
  });

  describe("editing name", function() {
    beforeEach(function() {
      component = mount(<UserView user={ user } />);
      component.find("h2").last().simulate("dblclick");
    });

    it("displays the first and last names in edit boxes for the user to change", function() {
      const inputs = component.find("input.edit-field");

      expect(inputs).to.have.length(2);
      expect(inputs.first().node.value).to.eq('Brian');
      expect(inputs.last().node.value).to.eq('Johnson');
    });
  });
});
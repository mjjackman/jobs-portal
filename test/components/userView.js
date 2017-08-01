import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import UserView from '../../src/components/userView';
import User from '../../src/models/user';

describe("userView component", function() {
  var component;

  beforeEach(function() {
    var user = new User({
      firstName: 'Joe',
      lastName: 'Perkins'
    });

    component = shallow(<UserView user={ user } />);
  });

  describe("render", function() {
    it("creates a div with a class name of user-view", function() {
      expect(component.is("div")).to.eq(true);
      expect(component.hasClass("user-view")).to.eq(true);
    });

    it("displays the user's name in a heading", function() {
      expect(component.find('h2').length).to.eq(1);
      expect(component.find('h2').text()).to.eq('Joe Perkins');
    });
  });

  describe("editing name", function() {
    beforeEach(function() {
      component.find("h2").last().simulate("dblclick");
    });

    it("displays the first and last names in edit boxes for the user to change", function() {
      const inputs = component.find("input.edit-field");

      expect(inputs).to.have.length(2);
      expect(inputs.first().node.props.value).to.eq('Joe');
      expect(inputs.last().node.props.value).to.eq('Perkins');
    });
  });

});
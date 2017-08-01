import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import UserView from '../../src/components/userView';

describe("userView component", function() {
  var component;

  describe("render", function() {
    beforeEach(function() {
      component = shallow(<UserView />);
    });

    it("creates a div with a class name of user-view", function() {
      expect(component.is("div")).to.eq(true);
      expect(component.hasClass("user-view")).to.eq(true);
    });

    it("displays the user's name in a heading", function() {
      console.log(component.html()); // debug the react component
      expect(component.contains(<h2>Dan Garland</h2>)).to.eq(true);
    });
  });

});
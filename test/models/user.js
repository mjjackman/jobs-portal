import { expect } from 'chai';
import { LocalStorage } from 'node-localStorage';
import User from '../../src/models/user';


describe('User', function() {
  var user;
  var localStorage;

  beforeEach(function() {
    localStorage = new LocalStorage('test/test.ls');
  });

  beforeEach(function() {
    user = new User({
      firstName: 'Dan',
      lastName: 'Garland',
      bio: 'Full Stack Web Developer',
      tagline: 'Here I am', 
      store: localStorage 
    });
  });

  it('provides the firstName', function() {
    expect(user.firstName).to.eq('Dan')
  });

  it('provides the lastName', function() {
    expect(user.lastName).to.eq('Garland')
  });

  it('provides the fullName', function() {
    expect(user.fullName()).to.eq('Dan Garland')
  });

  it('provides the bio', function() {
    expect(user.bio).to.eq('Full Stack Web Developer')
  });

  it('provides a tagline', function() {
    expect(user.tagline).to.eq('Here I am')
  });

  describe("updating user", function() {
    beforeEach(function() {
      user.update({firstName: "Brian", lastName: "Johnson", bio: "Web developer"});
    });

    it('updates firstName, lastName and bio', function() {
      expect(user.firstName).to.eq("Brian");
      expect(user.lastName).to.eq("Johnson");
      expect(user.bio).to.eq("Web developer");
    });
  });

  describe('save', function() {
    beforeEach(function() {
      user.save();
    });

    it("generates a id", function() {
      expect(user.id).to.not.be.undefined;
      expect(typeof(user.id)).to.eq('string');
    });
    
    it("save in localStorage", function() {
      expect(user.store.length).to.eq(1);
      var storedUser = user.store.getItem(user.id);
      expect(JSON.parse(storedUser)).to.deep.eq(user);
      
    });
    afterEach(function() {
      user.store.clear();
    });
  });
});
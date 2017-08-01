import { expect } from 'chai';
import User from '../../src/models/user';

describe('User', function() {

  var user;

  beforeEach(function() {
    user = new User({
      firstName: 'Dan',
      lastName: 'Garland'
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

});
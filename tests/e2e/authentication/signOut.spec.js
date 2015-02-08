var userHelper = require('../helpers/user.helper');

describe('Sign-out', function () {
  it('should be able to logout', function () {
    userHelper.signOut();
  });
});

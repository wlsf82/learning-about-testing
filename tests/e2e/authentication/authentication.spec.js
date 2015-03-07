var userHelper = require('../helpers/user.helper');

describe('sign-in', function () {
  it('should login into the portal', function () {
    userHelper.signIn('admin', '!qaz2wsx');
  });

  it('should be able to logout', function () {
    userHelper.signOut();
  });
});

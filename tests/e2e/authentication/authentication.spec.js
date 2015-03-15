var userHelper = require('../helpers/user.helper')
  , user;

describe('sign-in', function () {
  it('should login into the portal', function () {
    var userInfo = {
      user: 'admin',
      password:'!qaz2wsx'
    };

    user = userHelper.signIn(userInfo);
  });

  it('should be able to logout', function () {
    user.signOut();
  });
});

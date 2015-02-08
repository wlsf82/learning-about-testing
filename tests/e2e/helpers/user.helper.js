module.exports = {
  signIn : function (user, password) {
    browser.get('/');

      var signIn = element(by.cssContainingText('.navbar-btn', 'Sign in'))
      , signInTitle = element(by.css('h1'))
      , userInput = element(by.css('#element-sign-in-username'))
      , passwordInput = element(by.css('#element-sign-in-password'))
      , submit = element(by.css('#element-sign-in-submit'))
      , signOutLink = element(by.css('.authenticated'));

    signIn.click();

    expect(signInTitle.getText()).toEqual('Sign in');

    userInput.sendKeys(user);
    passwordInput.sendKeys(password);
    submit.click();

    expect(signOutLink.isPresent()).toBe(true);
  },

  signOut : function () {
    var signOutLink = element(by.cssContainingText('.navbar-btn', 'Sign out'))
    , signIn = element(by.cssContainingText('.navbar-btn', 'Sign in'));

    expect(signOutLink.isPresent()).toBe(true);
    signOutLink.click();

    expect(signIn.isPresent()).toBe(true);
  }
}

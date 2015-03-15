var User = function(info) {
  var user = this;

  Object.keys(info).forEach(function(name) {
    user[name] = info[name];
  });
};

User.prototype.signIn = function() {
  signIn(this);
}

User.prototype.signOut = function() {
  signOut(this.user);
}

function signIn(info) {
  browser.get('/');

    var signIn = element(by.cssContainingText('.navbar-btn', 'Sign in'))
    , signInTitle = element(by.css('h1'))
    , userInput = element(by.css('#element-sign-in-username'))
    , passwordInput = element(by.css('#element-sign-in-password'))
    , submit = element(by.css('#element-sign-in-submit'))
    , signOutLink = element(by.css('.authenticated'));

  signIn.click();

  expect(signInTitle.getText()).toEqual('Sign in');

  userInput.sendKeys(info.user);
  passwordInput.sendKeys(info.password);
  submit.click();

  expect(signOutLink.isPresent()).toBe(true);

  return info instanceof User ? info : new User(info);
}

function signOut(user) {
  var userLink = element(by.cssContainingText('.btn-link', user))
    , signOut = element(by.cssContainingText('a', 'Sign out'))
    , signInLink = element(by.cssContainingText('.navbar-btn', 'Sign in'));

  expect(userLink.isPresent()).toBe(true);
  userLink.click();

  expect(signOut.isPresent()).toBe(true);
  signOut.click();

  expect(signInLink.isPresent()).toBe(true);
}

module.exports = {
  signIn: signIn,
  signOut: signOut
}

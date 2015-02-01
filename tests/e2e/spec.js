// spec.js
// These are the tests for the Learning About Testing learning portal
// The bellow tests will be uses as user acceptance tests

describe ('learning about testing portal', function () {

  it ('should have a title', function () {
    browser.get('http://learningabouttesting:3000/');
    expect(browser.getTitle()).toEqual('Learning About Testing');
  });

  it ('should have a home link in the top navigation bar', function () {
    var mainMenu = element(by.css('.navbar-default')),
        homeLink = mainMenu.element(by.css('.home'));

    expect(mainMenu.isPresent()).toBe(true);
    expect(homeLink.isPresent()).toBe(true);
  });
});

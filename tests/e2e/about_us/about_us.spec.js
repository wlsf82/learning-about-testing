// about_us.spec.js
// These are the tests for the Learning About Testing Portal
// The bellow tests will be used as user acceptance tests

describe ('About us', function () {

  it ('should have an about us link in the top navigation bar', function () {
    browser.get('/');

    var mainMenu = element(by.css('.navbar-left'));

    expect(mainMenu.isPresent()).toBe(true);
    expect(mainMenu.getText()).toContain('About us');
  });

  it ('should open the about us page', function () {
    browser.get('/');

    var mainMenu = element(by.css('.navbar-left'))
      , aboutUs = mainMenu.element(by.cssContainingText('a', 'About us'))
      , aboutUsTitle = element(by.cssContainingText('h1', 'About us'))
      , aboutUsDescription = element(by.css('.html-page'));

      aboutUs.click();

    expect(aboutUsTitle.isPresent()).toBe(true);
    expect(aboutUsDescription.isPresent()).toBe(true);
    expect(aboutUsDescription.getText()).toContain('Learning About Testing portal is an experiment for knowledge sharing');
  });

});

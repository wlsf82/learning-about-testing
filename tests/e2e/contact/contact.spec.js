// contact.spec.js
// These are the tests for the Learning About Testing Portal
// The bellow tests will be used as user acceptance tests

var helper = require('../helpers/helper');

describe ('Contact', function () {

  it ('should have a contact link in the top navigation bar', function () {
    browser.get('/');

    var mainMenu = element(by.css('.navbar-left'));

    expect(mainMenu.isPresent()).toBe(true);
    expect(mainMenu.getText()).toContain('Contact');
  });

  it ('should open the contact page', function () {
    browser.get('/');

    var contactDescription = element(by.css('.html-page'));

    helper.clickOnMenuItem('Contact');

    helper.checkTitle('Contact');
    expect(contactDescription.isPresent()).toBe(true);
    expect(contactDescription.getText()).toContain('Contact us by our twitter channel');
  });

});

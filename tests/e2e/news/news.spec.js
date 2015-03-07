// news.spec.js
// These are the tests for the Learning About Testing Portal
// The bellow tests will be used as user acceptance tests

var helper = require('../helpers/helper');

describe ('News', function () {

  it ('should have a news link in the top navigation bar', function () {
    browser.get('/');

    var mainMenu = element(by.cssContainingText('.navbar-left', 'News'));

    expect(mainMenu.isPresent()).toBe(true);
  });

  it ('should open the news page', function () {
    browser.get('/');

    helper.clickOnMenuItem('News');

    helper.checkTitle('News');
  });

});

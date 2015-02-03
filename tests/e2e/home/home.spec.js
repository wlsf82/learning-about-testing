// home.spec.js
// These are the tests for the Learning About Testing Portal
// The bellow tests will be used as user acceptance tests

describe ('Home', function () {

  it ('should have a home link in the top navigation bar', function () {
    browser.get('http://learningabouttesting:3000/');

    var mainMenu = element(by.css('.navbar-left'));

    expect(mainMenu.isPresent()).toBe(true);
    expect(mainMenu.getText()).toContain('Home');
  });

  it ('should have a highlight', function() {
    var highlight = element(by.css('.highlight'));

    expect(highlight.isPresent()).toBe(true);
    expect(highlight.getText()).toContain('Here we will teach you');
  });

  it ('should have a image in the highlight', function() {
    var image = element(by.css('.home .row-highlight'));
    browser.driver.sleep(3000);

    expect(image.isPresent()).toBe(true);
    expect(image.getCssValue('background')).toContain('/images/learning_0.jpg');
  });

});

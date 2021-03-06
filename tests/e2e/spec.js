// spec.js
// These are the tests for the Learning About Testing Portal
// The bellow tests will be used as user acceptance tests

var helper = require('./helpers/helper');

describe ('learning about testing portal', function () {

  it ('should have a title', function () {
    browser.get('/');

    helper.checkTitle('Here we will share with you');
  });

  it ('should have a highlight', function() {
    var highlight = element(by.css('.highlight'));

    expect(highlight.isPresent()).toBe(true);
    expect(highlight.getText()).toContain('Here we will share with you');
  });

  it ('should have a image in the highlight', function() {
    var image = element(by.css('.home .row-highlight'));

    expect(image.isPresent()).toBe(true);
    expect(image.getCssValue('background')).toContain('/images/learning_0.jpg');
  });

  // it ('should verify the applied theme', function () {
  //   var generalContext = element(by.css('.ng-scope'));
  //
  //   expect(generalContext.isPresent()).toBe(true);
  //   expect(generalContext.getAttribute('theme')).toBe('flatly');
  // });
});

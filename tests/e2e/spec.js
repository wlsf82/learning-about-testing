// spec.js
// These are the tests for the Learning About Testing Portal
// The bellow tests will be used as user acceptance tests

describe ('learning about testing portal', function () {

  it ('should have a title', function () {
    browser.get('http://learningabouttesting:3000/');
    expect(browser.getTitle()).toEqual('Learning About Testing');
  });

  // it ('should verify the applied theme', function () {
  //   var generalContext = element(by.css('.ng-scope'));
  //
  //   expect(generalContext.isPresent()).toBe(true);
  //   expect(generalContext.getAttribute('theme')).toBe('flatly');
  // });
});

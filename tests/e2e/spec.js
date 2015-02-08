// spec.js
// These are the tests for the Learning About Testing Portal
// The bellow tests will be used as user acceptance tests

describe ('learning about testing portal', function () {

  it ('should have a title', function () {
    browser.get('/');

    var title = element(by.cssContainingText('.navbar-brand .ng-scope', 'Learning About Testing'));
    expect(title.isPresent()).toBe(true);
  });

  // it ('should verify the applied theme', function () {
  //   var generalContext = element(by.css('.ng-scope'));
  //
  //   expect(generalContext.isPresent()).toBe(true);
  //   expect(generalContext.getAttribute('theme')).toBe('flatly');
  // });
});

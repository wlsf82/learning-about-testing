// media.spec.js
// These are the tests for the Learning About Testing Portal
// The bellow tests will be used as user acceptance tests

describe ('Media', function () {

  it ('should have a media link in the top navigation bar', function () {
    browser.get('/');

    var mainMenu = element(by.css('.navbar-left'));

    expect(mainMenu.isPresent()).toBe(true);
    expect(mainMenu.getText()).toContain('Media');
  });

  it ('should open the media page', function () {
    var mainMenu = element(by.css('.navbar-left')),
        mediaLink = mainMenu.element(by.cssContainingText('a', 'Media')),
        mediaTitle = element(by.css('h1'));

    expect(mediaLink.isPresent()).toBe(true);
    expect(mediaLink.getText()).toEqual('Media');

    mediaLink.click();
    browser.driver.sleep(3000);

    expect(mediaTitle.isPresent()).toBe(true);
    expect(mediaTitle.getText()).toEqual('Videos');
  });

  it ('should have tabs with different types of media into the media page', function () {
    var mainMenu = element(by.css('.navbar-left')),
        mediaLink = mainMenu.element(by.cssContainingText('a', 'Media')),
        mediaTab = element(by.css('.nav-tabs'));

    mediaLink.click();
    expect(mediaTab.isPresent()).toBe(true);
    expect(mediaTab.getText()).toContain('Videos');
    expect(mediaTab.getText()).toContain('Podcasts');
    expect(mediaTab.getText()).toContain('eBooks and articles');
    expect(mediaTab.getText()).toContain('Images');
  });
});

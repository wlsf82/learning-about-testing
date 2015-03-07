module.exports = {
  clickOnMenuItem : function (menu) {
    var mainMenu = element(by.css('.navbar-left'))
      , menuItem = mainMenu.element(by.cssContainingText('a', menu));

    menuItem.click();
  },
  checkTitle : function (page) {
    var title = element(by.cssContainingText('h1', page));

    expect(title.isPresent()).toBe(true);
  }
}

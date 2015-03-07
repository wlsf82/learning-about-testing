module.exports = {
  clickOnMenuItem : function (menu) {
    var mainMenu = element(by.css('.navbar-left'))
      , menuItem = mainMenu.element(by.cssContainingText('a', menu));

    menuItem.click();
  }
}

var mainMenu = module.exports;

mainMenu.navigation = function (navigations, callback) {
  navigations['main'].items.push({
    "title" : "Home",
    "url" : "/"
  });
  callback();
}

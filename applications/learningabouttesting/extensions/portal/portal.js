var portal = module.exports;

portal.navigation = function (navigations, callback) {
  navigations['main'].items.push({
    "title" : "Home",
    "url" : "/"
  });
  navigations['main'].items.push({
    "title" : "Media",
    "url" : "/media"
  });
  callback();
}

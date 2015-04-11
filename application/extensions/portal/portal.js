var portal = module.exports;

portal.navigation = function (navigations, callback) {
  navigations['main'].items.push({
    "title" : "About us",
    "url" : "/about-us"
  });
  navigations['main'].items.push({
    "title" : "Media",
    "url" : "/media/videos"
  });
  navigations['main'].items.push({
    "title" : "News",
    "url" : "/news"
  });
  navigations['main'].items.push({
    "title" : "Contact",
    "url" : "/contact"
  });
  callback();
}

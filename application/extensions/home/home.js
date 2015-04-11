var home = module.exports;

/**
 * The page() hook.
 */
home.page = function(pages, callback) {

  // Override home page attributes.
  pages['home'].title = '';
  pages['home'].content = '';

  callback();
};

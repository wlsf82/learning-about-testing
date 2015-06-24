var contact = module.exports;

/**
 * The route() hook.
 */
 contact.route = function(routes, callback) {

   var newRoutes = {};
   var application = this.application;

   newRoutes['/contact/submit'] = {
      access: true,
      callback: function(request, response, callback) {
        request.flash('info', 'Flash is back!');
      }
    };

    callback(null, newRoutes);
};

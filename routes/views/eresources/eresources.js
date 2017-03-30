var keystone = require('keystone');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'eresources';


  view.query('publications', keystone.list('Publication').model.find());

  var pageData = {
    loginRedirect: '/eresources',
    breadcrumbs: [
      { text: 'E Resources', link: '/eresources'},
    ]
  }

  view.render('eresources/eresources', pageData);
}
var keystone = require('keystone');
var Publication = keystone.list('Publication');

exports = module.exports = function(req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'eresources';

  locals.breadcrumbs = [
    { text: 'E Resources', link: '/eresources'}
  ];

  if (!req.body.userID  || !req.body.publicationID) {
    console.log('Nothing to Review!');
  }

  Publication.model.findOne(
    { _id: req.body.publicationID },
    'title',
    function(error, publication) {
      locals.title = publication.title;
    });

  locals.userID = req.body.userID;
  locals.publicationID = req.body.publicationID;

  view.render('eresources/feedback');
}
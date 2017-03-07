var keystone = require('keystone');

exports = module.exports = function (req, res) {
  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'community';
  locals.data = {
    trainings: [],
  };

  // view.query('trainings', keystone.list('Training').model.find());

  var q = keystone.list('Training').model.find({});

    q.exec(function (err, result) {
      console.log(result)
      locals.data.trainings = result;
      // next(err);
    });

  view.render('community');
}
var keystone = require('keystone');
var Publication = keystone.list('publications');

exports = module.exports = function(req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;
  locals.section = 'eresources';

  locals.redirect = '/eresources/reports/publications';
  locals.breadcrumbs = [
    { text: 'E Resources', link: '/eresources' },
    { text: 'Reports', link: '/eresources/reports' }
  ]

  view.on('post', { action: 'generate-publications-report' }, function(next) {
    var data = req.body;
    var cols = '';

    cols = addBit(cols, data.title);
    cols = addBit(cols, data.publicationType);
    cols = addBit(cols, data.publicationLine);
    cols = addBit(cols, data.publisher);
    cols = addBit(cols, data.publicationYear);
    cols = addBit(cols, data.description);
    cols = addBit(cols, data.industry);
    cols = addBit(cols, data.sector);
    cols = addBit(cols, data.commodity);
    cols = addBit(cols, data.technicalEditor);
    cols = addBit(cols, data.volumeEditor);
    cols = addBit(cols, data.layoutArtist);
    cols = addBit(cols, data.ISSN);
    cols = addBit(cols, data.ISBN);
    cols = addBit(cols, data.printer);
    cols = addBit(cols, data.format);
    cols = addBit(cols, data.numberOfPages);
    cols = addBit(cols, data.price);
    cols = addBit(cols, data.downloads);

    // return next('/api/publications/reports/publications?cols=' + cols);
    console.log('/api/publications/reports/publications?cols=' + cols);
    return res.redirect('/api/publications/reports/publications?cols=' + cols);

  });

  view.render('eresources/analytics/customReports/publications');
}

// Add bit to cols if param is present ('on')
function addBit(cols, param) {
  if (param) {
    cols += '1';
  } else {
    cols += '0';
  }
  return cols
}
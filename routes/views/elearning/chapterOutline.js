var keystone = require('keystone');
var http = require('http');
var Chapter = keystone.list('Chapter');
var LearningObject = keystone.list('LearningObject');
var ELearningVisit = keystone.list('ELearningVisit');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set localss

  var pageData = {
    loginRedirect: '/elearning/'+req.params.courseslug+'/chapter/'+req.params.chapterslug,
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
      { text: req.params.courseslug.replace(/-/g, ' '), link: '/elearning/course/'+req.params.courseslug },
      { text: req.params.chapterslug.replace(/-/g, ' '), link: '/elearning/course/'+req.params.courseslug+'/chapter/'+req.params.chapterslug }
    ]
  }

  locals.data = {
    currChapter: [],
  };

  locals.currslug = req.params.chapterslug;
  locals.viewStyle = req.query.view == undefined ? 'list' : req.query.view;
  var page = req.query.page == undefined ? 1 : req.query.view;

  var searchTerm = req.query.term
  var searchCategory = req.query.category

  // Load the current chapter
  view.on('init', function(next){
    Chapter.model.findOne({
      slug: req.params.chapterslug,
      state: 'published',
    })  
    .populate('author outline')
    .exec(function(err, result){
      if(result != null){
        locals.data.currChapter = result;
        pageData.breadcrumbs.push(  { text: locals.data.currChapter.title, link: '/elearning/'+req.params.chapterslug } );
      } else {
        return res.status(404).send(keystone.wrapHTMLError('Sorry, Chapter:' + req.params.chapterslug +' not found! (404)'));
      }
      next(err);
    });
  });

  //insert ELearning Visit
  view.on('init', function(next){
    var currentUser = locals.user;
    var isLOUser = false;
    if(currentUser){
      isLOUser = true;
    }
    var ip = req.ips;
    var options = {    
        host: 'freegeoip.net',    
        path: '/json/' + ip,
        method: 'GET'
    };
    var reqData = http.request(options, function(res) {
      if (('' + res.statusCode).match(/^2\d\d$/)) {
        res.setEncoding('utf8');    
        res.on('data', function (chunk) {  
            var obj = JSON.parse(chunk);
            var newVisit = new ELearningVisit.model({
              ip: obj.ip,
              country_code: obj.country_code,
              region: obj.region_name,
              city: obj.city,
              isUser: isLOUser
            });
            newVisit.save(function(err) {
              console.log("success in inserting geolocation");
            });
        });
      }
      else if (('' + res.statusCode).match(/^5\d\d$/)){

      }
    });
    reqData.on('error', function (e) {
      // General error, i.e.
      //  - ECONNRESET - server closed the socket unexpectedly
      //  - ECONNREFUSED - server did not listen
      //  - HPE_INVALID_VERSION
      //  - HPE_INVALID_STATUS
      //  - ... (other HPE_* codes) - server returned garbage
      console.log('error getting geolocation');
    });
    reqData.write('data\n');
    reqData.write('data\n');
    reqData.end();
    next();
  });
  // Render the view
  view.render('elearning/chapterOutline', pageData);

};

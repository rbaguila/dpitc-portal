var keystone = require('keystone');
var http = require('http');

var helper = require('./../helper');

var LearningContent = keystone.list('LearningContent');
var ELearningVisit = keystone.list('ELearningVisit');
var Course = keystone.list('Course');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'courses';
  locals.url = '/elearning/course/'+req.params.courseslug+'?';

  locals.viewStyle = req.query.view == undefined ? 'grid' : req.query.view;
  locals.page = req.query.page == undefined ? 1 : req.query.page;
  locals.perPage = req.query.perPage == undefined ?  12 : req.query.perPage;

  locals.formData = req.body || {};

  locals.searchSubmitted = false;
  locals.searchUrl = locals.url + 'action=elearning.search&search=';
  locals.searchResults = [];

  locals.currslug = req.params.courseslug;
  
  locals.data = {
    courses: [],
    chapters: [],
  };

  var pageData = {
    loginRedirect: '/elearning/course/'+req.params.courseslug,
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
      { text: req.params.courseslug.replace(/-/g, ' '), link: '/elearning/course/'+req.params.courseslug },
    ]
  }

  /* Search */
  view.on('get', { action: 'elearning.search' }, function (next) {
    
    locals.searchSubmitted = true;
    locals.searchUrl = locals.searchUrl+req.query.search+'&';

    LearningContent.model.find(
        { $text: { $search: req.query.search } },
        { score: { $meta: "textScore" } }
      )
      .sort( { score: { $meta: "textScore" } } )
      .exec( function(err, results) {
        if (err || !results.length){
          return next(err);
        }
        locals.searchResults = results;

        locals.paginatedSearchResults = helper.paginate(locals.searchResults, locals.page, locals.perPage);
        next(err);
      });

  });
  
  // Load the current course
  view.on('init', function(next){
    Course.model.findOne({
      slug: req.params.courseslug,
      state: 'published',
    })  
    .populate('author outline')
    .exec(function(err, result){
      if(result != null){
        locals.currentCourse = result;
      } else {
        return res.status(404).send(keystone.wrapHTMLError('Sorry, Course: '+ req.params.courseslug +' not found! (404)'));
      }
      next(err);
    });
  });

  //insert ELearning Visit
  view.on('init', function(next){
    var currentUser = locals.user;
    var isLOUser = false;//suburb = city/municipality, state = region

    var ip = req.ips;
    var options = {    
        host: 'freegeoip.net',    
        path: '/json/' + ip,
        method: 'GET'
    };
    var getGeoLocation = false;
    if(currentUser){
      isLOUser = true;
      if(currentUser.location.suburb!=null&&currentUser.location.state!=null){
         var newVisit = new ELearningVisit.model({
            country_code: 'PH',
            region: currentUser.location.state,
            city: currentUser.location.suburb,
            isUser: isLOUser
          });
          newVisit.save(function(err) {
          });
      }
      else{
        getGeoLocation = true;
      }
    }
    else{
      getGeoLocation = true;
    }
    if(getGeoLocation==true){
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
        console.log('error getting geolocation');
      });
      reqData.write('data\n');
      reqData.write('data\n');
      reqData.end();
    }
    next();
  });


  // Render the view
  view.render('elearning/content/courseOutline', pageData);

};

var keystone = require('keystone');
var http = require('http');
var ELearningVisit = keystone.list('ELearningVisit');
var Course = keystone.list('Course');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'courses';

  var pageData = {
    loginRedirect: '/elearning/course/'+req.params.courseslug,
    breadcrumbs: [
      { text: 'elearning', link: '/elearning' },
      { text: req.params.courseslug.replace(/-/g, ' '), link: '/elearning/course/'+req.params.courseslug },
    ]
  }

  locals.data = {
    currCourse: [],
    courses: [],
    chapters: [],
  };

  locals.currslug = req.params.courseslug;
  locals.viewStyle = req.query.view == undefined ? 'list' : req.query.view;
  var page = req.query.page == undefined ? 1 : req.query.view;

  var searchTerm = req.query.term
  var searchCategory = req.query.category


  // Load the current course
  view.on('init', function(next){
    Course.model.findOne({
      slug: req.params.courseslug,
      state: 'published',
    })  
    .populate('author outline')
    .exec(function(err, result){
      if(result != null){
        locals.data.currCourse = result;
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
  view.render('elearning/courseOutline', pageData);

};

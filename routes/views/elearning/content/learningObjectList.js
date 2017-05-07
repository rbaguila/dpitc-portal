var keystone = require('keystone');
var http = require('http');
var ELearningVisit = keystone.list('ELearningVisit');

var helper = require('./../helper');

var LearningContent = keystone.list('LearningContent');
var LearningObject = keystone.list('LearningObject');
var ISP = keystone.list('ISP');
var LIndustry = keystone.list('LIndustry');
var LSector = keystone.list('LSector');
var Author = keystone.list('Author');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  locals.section = 'learning objects';
  locals.url = '/elearning/learning-objects?';
  
  locals.viewStyle = req.query.view == undefined ? 'grid' : req.query.view;
  locals.page = req.query.page == undefined ? 1 : req.query.page;
  locals.perPage = req.query.perPage == undefined ?  12 : req.query.perPage;

  locals.formData = req.body || {};

  locals.searchSubmitted = false;
  locals.searchUrl = locals.url + 'action=elearning.search&search=';
  locals.searchResults = [];

  locals.filters = {
    name: null,
    value: null
  };

  var pageData = {
    loginRedirect: '/elearning/learning-objects?',
    breadcrumbs: [
      { text: 'ELearning', link: '/elearning' },
      { text: 'Lessons', link: '/elearning/learning-objects?' },
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

  // Load filters
  view.on('init', function (next) {
    
    if (req.query.isp != undefined) {
      ISP.model.findOne({
          key: req.query.isp
        })    
        .exec(function (err, result) { 
          locals.filters.name = 'isp';
          locals.filters.value = result;
          next(err);
        });
    } else {
      next();
    }

  });

  view.on('init', function (next) {
    
    if (req.query.sector != undefined) {
      LSector.model.findOne({
          key: req.query.sector
        })    
        .exec(function (err, result) {
          locals.filters.name = 'sector';
          locals.filters.value = result;
          next(err);
        });
    } else {
      next();
    }
    
  });

  

  view.on('init', function (next) {
    
    if (req.query.industry != undefined) {
      LIndustry.model.findOne({
          key: req.query.industry
        })    
        .exec(function (err, result) {
          locals.filters.name = 'industry';
          locals.filters.value = result;
          next(err);
        });
    } else {
      next();
    }
    
  });

  view.on('init', function (next) {

    if (req.query.author != undefined) {
      Author.model.findOne({
          key: req.query.author
        })    
        .exec(function (err, result) {
          locals.filters.name = 'author';
          locals.filters.value = result;
          next(err);
        });
    } else {
      next();
    }
  });
  
  // Load learningObjects
  view.on('init', function (next) {
    
    var q;
    if (locals.filters.name == null) {
      q = LearningObject.paginate({
        page: locals.page,
        perPage: locals.perPage,
        filters: { 
          'state': 'published'
        },
      })
      .populate('isp, sector, industry')
      .sort('-publishedAt');

    } else {
      locals.url += locals.filters.name + '=' + locals.filters.value.key;
      
      q = LearningObject.paginate({
          page: locals.page,
          perPage: locals.perPage,
          filters: { 
            $and: [
              { 'state': 'published' },
              { [locals.filters.name]: locals.filters.value }
            ]            
          },
        })
        .populate('isp, sector, industry')
        .sort('-publishedAt');

    }

    q.exec(function(err, results){
      
      if (err) {
        return next(err);
      }


      locals.learningObjects = results;
      
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
  view.render('elearning/content/learningObjectList', pageData);

};

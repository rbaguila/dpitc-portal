var keystone = require('keystone');
var http = require('http');
var ELearningVisit = keystone.list('ELearningVisit');

var LearningObject = keystone.list('LearningObject');
var ISP = keystone.list('ISP');
var LIndustry = keystone.list('LIndustry');
var LSector = keystone.list('LSector');

exports = module.exports = function (req, res) {

  var view = new keystone.View(req, res);
  var locals = res.locals;

  // Set locals
  locals.section = 'learning objects';
  locals.url = '/elearning/learning-objects?';

  var pageData = {
    loginRedirect: '/elearning/learning-objects?',
    breadcrumbs: [
      { text: 'ELearning', link: '/elearning' },
      { text: 'Lessons', link: '/elearning/learning-objects?' },
    ]
  }

  locals.viewStyle = req.query.view == undefined ? 'grid' : req.query.view;
  locals.page = req.query.page == undefined ? 1 : req.query.page;
  locals.perPage = req.query.perPage == undefined ?  9 : req.query.perPage;

  // Category locals
 /* locals.isp = req.query.isp == undefined ? null : req.query.isp;
  locals.sector = req.query.sector == undefined ? null : req.query.sector;
  locals.industry = req.query.industry == undefined ? null : req.query.industry;
  */
  locals.filters = {
    state: 'published',
    isp: req.query.isp,
    sector: req.query.sector,
    industry: req.query.industry,
    specificCommodity: req.query.specific
  }

  // Load categories
  view.on('init', function (next) {
    
    if (req.query.isp) {
      ISP.model.findOne({
          key: locals.filters.isp
        })    
        .exec(function (err, result) {
          locals.isp = result;
          next(err);
        });
    } else {
      next();
    }

  });

  view.on('init', function (next) {
    
    if (req.query.sector) {
      LSector.model.findOne({
          key: locals.filters.sector
        })    
        .exec(function (err, result) {
          locals.sector = result;
          next(err);
        });
    } else {
      next();
    }
    
  });

  

  view.on('init', function (next) {
    
    if (req.query.industry) {
      LIndustry.model.findOne({
          key: locals.filters.industry
        })    
        .exec(function (err, result) {
          locals.industry = result;
          next(err);
        });
    } else {
      next();
    }
    
  });
  
  var searchTerm = req.query.term
  var searchCategory = req.query.category

  // Load learningObjects
  view.on('init', function (next) {
    
    var q = LearningObject.paginate({
        page: locals.page,
        perPage: locals.perPage,
        filters: { 
          'state': 'published',
        },
      })
      .populate('isp, sector, industry')
      .sort('-publishedAt')

      if (locals.specificCommodity) {
        q.where('specificCommodity').in([locals.specificCommodity])
      }
      if (locals.isp) {
        q.where('isp').in([locals.isp])
      }
      if (locals.sector) {
        q.where('sector').in([locals.sector])
      }
      if (locals.industry) {
        q.where('industry').in([locals.industry])
      }

      q.exec(function(err, results){
        
        //if (err) return next(err);

        locals.learningObjects = results;
        
        //console.log(results);
        
        //console.log(locals.learningObjects);
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
  view.render('elearning/learningObjectList', pageData);

};

var keystone = require('keystone');
var LearningObject = keystone.list('LearningObject');

exports = module.exports = function(req, res){
    
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //locals.section is used to set the currently selected
    //item in the header navigation.
    locals.section = 'analyticsLOList';

    locals.data = {
        learningObjects: [],
        industry: [],
        industryKey: [],
        industries: []
    };

    var page = req.query.page == undefined ? 1 : req.query.view;

    view.on('init', function(next){
        if(req.params.industry=="allindustries"){
            locals.data.industryKey = "allindustries";
            next();
        }
        else{
            var q = keystone.list('LIndustry').model.findOne({
                key: req.params.industry
            });

            q.exec(function(err, result){
                if(err||result==null){
                    return next(err);
                }
                locals.data.industry = result;
                locals.data.industryKey = result.key;
                next(err);
            });
        }
      });

    view.on('init', function(next){
        locals.data.learningObjects = [];
        if(locals.data.industryKey=="allindustries"){
            LearningObject.paginate({
                page: req.query.page,
                perPage: 15,
                maxPages: 10,
            })
            .populate('author')
            .exec(function(err, results){
                locals.data.learningObjects = results;
                next(err);
            });
        }
        else{
            LearningObject.paginate({
                page: req.query.page,
                perPage: 15,
                maxPages: 10,
            })
            .where('industry', locals.data.industry._id)
            .populate('author')
            .exec(function(err, results){
                locals.data.learningObjects = results;
                next(err);
            });
        }
        
    });

    view.on('init', function(next){
        var q = keystone.list('LIndustry').model.find();

        q.exec(function(err, results){
            if(err || !results.length){
                return next(err);
            }
            locals.data.industries = results;
            next(err);
        });
      });

    //Render the view
    view.render('elearning/analyticsLOList');

};
var keystone = require('keystone');
var Course = keystone.list('Course');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'courses';

	locals.data = {
        courses: [],
    };

	view.on('init', function(next){
        Course.paginate({
            page: req.query.page || 1,
            perPage: 8,
            maxPages: 10,
        })
        .where('state', 'published')
        .sort('-PublishedAt')
        .exec(function(err, results){
            locals.data.courses = results;
            //console.log(locals.user);//access the current user
            //locals.data.courses.content.brief = truncate(locals.data.courses.content.brief, 20);
            next(err);
        });
    });

	// Render the view
	view.render('elearning/courseList');

};

/*truncate_results = function (results){
    for(var i=0; i<results.length; i++){
        truncate(results[i].content.brief, 15);
    }
    return results;
}

truncate = function ( value, arg ) {
    var value_arr = value.split( ' ' );
    if( arg < value_arr.length ) {
        value = value_arr.slice( 0, arg ).join( ' ' );
    }
    return value;
}*/
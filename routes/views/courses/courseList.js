var keystone = require('keystone');
var async = require('async');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'courses';

	locals.data = {
        courses: [],
        userRecommendedCourses: [],
        coursesTaken: [],
        coursesTakenIsps: [],
        coursesTakenIndustry: [],
        coursesTakenSector: [],
        coursesTakenSpecCom: [],
    };
    var tempRecommended = [];
    var classifications = ["specificCommodity", "isp", "sector", "industry"];
    var counts = ["specCommCount", "ispCount", "sectorCount", "industryCount"];
	view.on('init', function(next){
        var q = keystone.list('Course').model.find();

        q.exec(function(err, results){
            
            locals.data.courses = results;
            //console.log(locals.user);//access the current user
            //locals.data.courses.content.brief = truncate(locals.data.courses.content.brief, 20);
            next(err);
        });
    });

    view.on('init', function(next){
        var q = keystone.list('Learner').model.findOne();

        q.exec(function(err, result){
            
            locals.data.currentLearner = result;
            //console.log(locals.data.currentLearner);
            next(err);
        });
    });

    view.on('init', function(next){
        var q = keystone.list('Course').model.find().where('_id').in(locals.data.currentLearner.coursesTaken);

        q.exec(function(err, results){
            locals.data.coursesTaken = results;
            next(err);
        });
    });

    view.on('init', function(next){

        async.each(locals.data.courses, function (course, next) {
            if(notYetTaken(course, locals.data.coursesTaken)==0){
                next();
            }
            else{
                for(var j=0;j<classifications.length;j++){
                    var count = 0;
                    if(course[classifications[j]]!=null){
                        for(var i=0;i<locals.data.coursesTaken.length;i++){
                            if(locals.data.coursesTaken[i][classifications[j]]!=null&&course[classifications[j]]==locals.data.coursesTaken[i][classifications[j]]){
                                count++;
                            }
                        }
                    }
                    course[counts[j]] = count;
                }
                var score = (4 * (course.specCommCount)) + (3 * (course.ispCount)) + (2 * (course.sectorCount)) + (1 * (course.industryCount));
                if(score>0){//change this to change the threshold of score or compute for a just right threshold
                    course.score = score;
                    tempRecommended.push(course);
                }
                next();
            }
        }, function (err) {
            next(err);
        });
    });

    function notYetTaken(course, coursesTaken){
        var flag = 0;
        var courseId = course._id + "";
        for(var i=0;i<coursesTaken.length;i++){
            var coursesTakenId = coursesTaken[i]._id + "";
            if(courseId==coursesTakenId){
                flag = 1;
                return 0;
            }
        }
        if(flag==0) return 1;
    }

    view.on('init', function(next){

        tempRecommended.sort(function(a,b){
            return parseFloat(b.score) - parseFloat(a.score);
        });
        locals.data.userRecommendedCourses = tempRecommended.slice(0, 5);//temporary
        //locals.data.userRecommendedCourses = tempRecommended.slice(0, 36);//final, 36 recommended videos in youtube too
        /*for(var i=0;i<locals.data.userRecommendedCourses.length;i++){
            console.log("SPECIFIC COMMODITY " + locals.data.userRecommendedCourses[i].specCommCount);
            console.log("ISP " + locals.data.userRecommendedCourses[i].ispCount);
            console.log("Sector " + locals.data.userRecommendedCourses[i].sectorCount);
            console.log("Industry " + locals.data.userRecommendedCourses[i].industryCount);
            console.log("FINAL SCORE: " + locals.data.userRecommendedCourses[i].score);
        }*/
        next();
    });

	// Render the view
	view.render('courses/courseList');

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
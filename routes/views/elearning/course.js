var keystone = require('keystone');

exports = module.exports = function(req, res){
    
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //locals.section is used to set the currently selected
    //item in the header navigation.
    locals.section = 'courses';

    locals.data = {
        courses: [],
        course: [],
        recommendedCourses: [],
    };

    var classifications = ["specificCommodity", "isp", "sector", "industry"];

    // Load the current course
    view.on('init', function(next){
        var q = keystone.list('Course').model.findOne({
            slug: req.params.courseslug,
            state: 'published',
        });
        
        q.exec(function(err, result){
            if(result != null){
                locals.data.course = result;

            } else {
                return res.status(404).send(keystone.wrapHTMLError('Sorry, no course found! (404)'));
            }
            next(err);
        });
    });

    //load recommended courses

    view.on('init', function (next) {
        if( locals.data.course.specificCommodity!=null){
                keystone.list('Course').model.find().where('specificCommodity', locals.data.course.specificCommodity).exec(function (err, results) {
                var currentCourseId = locals.data.course._id + "";
                for(var i=0;i<results.length;i++){
                    var resultId = results[i]._id + "";

                    var flag = 0;
                    /* TO FOLLOW
                    check if kasama na sa recent or previous 100 courses taken ng user
                    for(var j=0;j<user.coursesTaken.length;j++){
                        var courseId = user.coursesTaken[j]._id + "";
                        if(resultId==courseId){
                            flag = 1;
                            break;
                        }
                    }*/
                    if(flag==0&&resultId!==currentCourseId && locals.data.recommendedCourses.length<3){
                        locals.data.recommendedCourses.push(results[i]);
                    }
                }
                next(err);
            });
        }
        else{
            next();
        }
    });
    view.on('init', function (next) {
        if(locals.data.recommendedCourses.length<3){
            keystone.list('Course').model.find().where('isp', locals.data.course.isp).exec(function (err, results) {
                var currentCourseId = locals.data.course._id + "";
                for(var i=0;i<results.length;i++){
                    var resultId = results[i]._id + "";
                    var flag = 0;
                    for(var j=0;j<locals.data.recommendedCourses.length;j++){
                        var courseId = locals.data.recommendedCourses[j]._id + "";
                        if(resultId==courseId){
                            flag = 1;
                            break;
                        }
                    }

                    /*
                    TO FOLLOW TOO
                    for(var j=0;j<user.coursesTaken.length;j++){
                        var courseId = user.coursesTaken[j]._id + "";
                        if(resultId==courseId){
                            flag = 1;
                            break;
                        }
                    }
                    */
                    if(flag==0&&resultId!=currentCourseId && locals.data.recommendedCourses.length<3){
                        locals.data.recommendedCourses.push(results[i]);
                    }
                    if(locals.data.recommendedCourses.length>=3){
                        break;
                    }
                }
                next(err);
            });
        }
        else{
            next();
        }
    });
    view.on('init', function (next) {
        if(locals.data.recommendedCourses.length<3){
            keystone.list('Course').model.find().where('sector', locals.data.course.sector).exec(function (err, results) {
                var currentCourseId = locals.data.course._id + "";
                for(var i=0;i<results.length;i++){
                    var resultId = results[i]._id + "";
                    var flag = 0;
                    for(var j=0;j<locals.data.recommendedCourses.length;j++){
                        var courseId = locals.data.recommendedCourses[j]._id + "";
                        if(resultId==courseId){
                            flag = 1;
                            break;
                        }
                    }

                    /*
                    TO FOLLOW TOO
                    for(var j=0;j<user.coursesTaken.length;j++){
                        var courseId = user.coursesTaken[j]._id + "";
                        if(resultId==courseId){
                            flag = 1;
                            break;
                        }
                    }
                    */

                    if(flag==0&&resultId!=currentCourseId && locals.data.recommendedCourses.length<3){
                        locals.data.recommendedCourses.push(results[i]);
                    }
                    if(locals.data.recommendedCourses.length>=3){
                        break;
                    }
                }
                next(err);
            });
        }
        else{
            next();
        }
        
    });
    view.on('init', function (next) {
        if(locals.data.recommendedCourses.length<3){
            keystone.list('Course').model.find().where('industry', locals.data.course.industry).exec(function (err, results) {
                var currentCourseId = locals.data.course._id + "";
                for(var i=0;i<results.length;i++){
                    var resultId = results[i]._id + "";
                    var flag = 0;
                    for(var j=0;j<locals.data.recommendedCourses.length;j++){
                        var courseId = locals.data.recommendedCourses[j]._id + "";
                        if(resultId==courseId){
                            flag = 1;
                            break;
                        }
                    }

                    /*
                    TO FOLLOW TOO
                    for(var j=0;j<user.coursesTaken.length;j++){
                        var courseId = user.coursesTaken[j]._id + "";
                        if(resultId==courseId){
                            flag = 1;
                            break;
                        }
                    }
                    */
                    
                    if(flag==0&&resultId!=currentCourseId && locals.data.recommendedCourses.length<3){
                        locals.data.recommendedCourses.push(results[i]);
                    }
                    if(locals.data.recommendedCourses.length>=3){
                        break;
                    }
                }
                next(err);
            });
        }
        else{
            next();
        }
        
    });

    // Load other courses
    view.on('init', function(next){
        var q = keystone.list('Course').model.find().where('state', 'published').sort('-publishedAt').limit(5);

        q.exec(function(err, results){
            locals.data.courses = results;
            //console.log(locals.data.courses);
            next(err);    
        });
    });

    //Render the view
    view.render('elearning/course');

};
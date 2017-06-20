var keystone = require('keystone');
var Feedback = keystone.list('publication-feedback');

exports = module.exports = function(req, res) {
  var publicationID = req.query.pubID
  var publicationTitle = req.query.pubTitle
  // Should reports per user be available?
  // var userID = req.query.userID

  // Publication Specific Report
  if (publicationID) {
    Feedback.model.find({ publication: publicationID }).populate('user publication').exec(function(err, results) {
        if (err) return res.apiError('Error generating report', err);

        contentTally = [0, 0, 0, 0, 0];
        usefulnessTally = [0, 0, 0, 0, 0];
        designTally = [0, 0, 0, 0, 0];
        responseTally = [0, 0, 0, 0, 0];

        results.forEach(function(feedback) {
          contentTally = foo(contentTally, feedback.content);
          usefulnessTally = foo(usefulnessTally, feedback.usefulness);
          designTally = foo(designTally, feedback.design);
          responseTally = foo(responseTally, feedback.responseTime);
        })

        var CSV = publicationTitle + '\n';
        CSV += ',Outstanding,Very Satisfactory,Satisfactory,Fair,Unsatisfactory/Needs Improvement';
        CSV += '\nContent,';
        CSV += contentTally.join(',');
        CSV += '\nUsefulness,';
        CSV += usefulnessTally.join(',');
        CSV += '\nDesign,';
        CSV += usefulnessTally.join(',');
        CSV += '\nResponse Time,';
        CSV += responseTally.join(',');

        res.header("Content-Disposition", "attachment;filename=report.csv");
        res.set('Content-Type', 'application/octet-stream');
        res.type("text/csv");

        res.send(CSV);
      })
  }

  // Just get it all
  else {
    res.send('Sending you EVERYTHING!!!')
  }
}

function foo(tally, answer) {
  if (answer == 'Outstanding') {
    tally[0]++;
  } else if (answer == 'Very Satisfactory') {
    tally[1]++;
  } else if (answer == 'Satisfactory') {
    tally[2]++;
  } else if (answer == 'Fair') {
    tally[3]++;
  } else if (answer == 'Unsatisfactory/Needs Improvement') {
    tally[4]++;
  }

  return tally;
}

var keystone = require('keystone');
var Feedback = keystone.list('publication-feedback');

exports = module.exports = function(req, res) {
  var publicationID = req.query.pubID
  var publicationTitle = req.query.pubTitle

  // Publication Specific Report
  if (publicationID) {
    constraints = {}
    if (req.query.start && req.query.end) {
      constraints = {
        publication: publicationID,
        createdAt: {
          $gte: new Date(req.query.start),
          $lt: new Date(req.query.end)
        }
      }
    }
    else {
      constraints = { publication: publicationID }
    }

    Feedback.model.find(constraints).populate('user publication').exec(function(err, results) {
        if (err) return res.apiError('Error generating report', err);

        var contentTally = [0, 0, 0, 0, 0];
        var usefulnessTally = [0, 0, 0, 0, 0];
        var designTally = [0, 0, 0, 0, 0];
        var responseTally = [0, 0, 0, 0, 0];

        results.forEach(function(feedback) {
          contentTally = tally(contentTally, feedback.content);
          usefulnessTally = tally(usefulnessTally, feedback.usefulness);
          designTally = tally(designTally, feedback.design);
          responseTally = tally(responseTally, feedback.responseTime);
        });

        var CSV = 'Title:,' + publicationTitle + '\n';
        CSV += 'Date Range:,'

        if (req.query.start && req.query.end) {
          CSV += req.query.start + ' - ' + req.query.end;
        } else {
          CSV += 'From the beginning'
        }

        CSV += '\n';
        CSV += 'Feedback count:,' + results.length

        CSV += '\n\n';

        CSV += ',Outstanding,Very Satisfactory,Satisfactory,Fair,Unsatisfactory/Needs Improvement';
        CSV += '\nContent,';
        CSV += contentTally.join(',');
        CSV += '\nUsefulness,';
        CSV += usefulnessTally.join(',');
        CSV += '\nDesign,';
        CSV += usefulnessTally.join(',');
        CSV += '\nResponse Time,';
        CSV += responseTally.join(',');

        CSV += '\n\nDate,User,Comments\n';
        results.forEach(function(feedback) {
          CSV += feedback.createdAt;
          CSV += ','
          CSV += feedback.user.name.first + ' ' + feedback.user.name.last;
          CSV += ',';
          CSV += feedback.comments;
          CSV += '\n';
        });

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

function tally(tally, answer) {
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

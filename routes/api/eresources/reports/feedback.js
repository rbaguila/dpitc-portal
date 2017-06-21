var keystone = require('keystone');
var Feedback = keystone.list('publication-feedback');

exports = module.exports = function(req, res) {
  var pubID = req.query.pubID;
  var pubTitle = req.query.pubTitle;
  var pubLine = req.query.pubLine;
  var pubLineName = req.query.pubLineName;
  var start = req.query.start;
  var end = req.query.end;

  // Set constraints based on request query
  var constraints = {}

  // Query by publine doesn't work yet since can't deep query with relationship EVEN if populated -____-
  if (pubID) {
    constraints['publication'] = pubID;
  }

  if (pubLine) {
    // DEEP query
  }

  if (start && end) {
    constraints['createdAt'] = {
      $gte: new Date(start),
      $lt: new Date(end)
    }
  }


  // Fetch feedback that match constraints
  Feedback.model.find(constraints).sort('createdAt').populate('user publication').exec(function(err, results) {
      if (err) return res.apiError('Error generating report', err);

      var contentTally = [0, 0, 0, 0, 0];
      var usefulnessTally = [0, 0, 0, 0, 0];
      var designTally = [0, 0, 0, 0, 0];
      var responseTally = [0, 0, 0, 0, 0];

      results.forEach(function(feedback) {
        console.log('Title: ' + feedback.publication.title + ' pubLine: ' + feedback.publication.publicationLine);
        contentTally = tally(contentTally, feedback.content);
        usefulnessTally = tally(usefulnessTally, feedback.usefulness);
        designTally = tally(designTally, feedback.design);
        responseTally = tally(responseTally, feedback.responseTime);
      });

      var CSV = ''
      if (pubTitle && pubID) {
        CSV += 'Title:,' + pubTitle + '\n';
      } else if (pubLineName && pubLine) {
        CSV += 'PublicationLine:,' + pubLineName + '\n';
      } else {
        CSV += 'All Publications\n';
      }

      CSV += 'Date Range:,'

      if (start && end) {
        CSV += start + ' to ' + end;
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

      CSV += '\n\nDate/Time,Title,User,Comments\n';

      results.forEach(function(feedback) {
        CSV += feedback.createdAt;
        CSV += ',';
        CSV += feedback.publication.title;
        CSV += ',';
        CSV += feedback.user.name.first + ' ' + feedback.user.name.last;
        CSV += ',';
        CSV += feedback.comments;
        CSV += '\n';
      });

      var filename = getFilename(pubID, pubTitle, start, end);

      res.header("Content-Disposition", "attachment;filename=" + filename);
      res.set('Content-Type', 'application/octet-stream');
      res.type("text/csv");

      res.send(CSV);
    })
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

function getFilename(pubID, pubTitle, start, end) {
  var filename = ''
  if (pubID && pubTitle) {
    filename += pubTitle;
  } else {
  filename += 'All Publications';
  }

  if (start && end) {
    filename += '(' + start + '_' + end + ')';
  } else {
    filename += '(Complete)';
  }

  filename += '.csv';

  return filename;
}
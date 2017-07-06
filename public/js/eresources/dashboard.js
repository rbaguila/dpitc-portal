$(function() {

  var downloads = $.getJSON('/api/publications/downloads/current-month', function(data) {
  });

  var feedback = $.getJSON('/api/publications/feedback/current-month', function(data) {
  });

  $.when(downloads, feedback).done(function(downloads, feedback) {
    var downloadData = tallyDownloads(downloads[0]);
    var feedbackData = tallyFeedback(feedback[0]);

    renderCurrentMonthData(downloadData, feedbackData);
  });

});

function renderCurrentMonthData(downloads, feedback) {
  Highcharts.chart('downloads-chart', {
    chart: {
      type: 'column',
    },
    title: {
        text: 'Downloads & Feedback for all publications for the month of <b>' + getMonthWord((new Date()).getMonth()) + '</b>'
    },
    yAxis: {
        title: {
            text: 'Number of feedback and downloads'
        },
        tickInterval: 1
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
            month: '%e. %b',
            year: '%b'
        },
        title: {
            text: 'Date'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    series: [
      {
        name: 'Downloads',
        data: downloads
      },
      {
        name: 'Feedback',
        data: feedback
      }
    ]
  });
}

function tallyDownloads(downloads) {
  var now = new Date();
  var start = new Date(now.getFullYear(), now.getMonth(), 1);
  var end = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  // Get array of dates for current month
  // FORMAT: [ [<first day of month>, <download count>], [...], ... ]
  var dateArray = getArrayOfDates(start, end);

  // Tally downloads
  // The download counts from the the getArrayOfDates set the counts to 0 by default so now it's time to add to those
  downloads.forEach(function(record) {
    var d = new Date(record.date);

    var dateOfDownload = new Date(d.getFullYear(), d.getMonth(), d.getDate());

    for (let a = 0; a < dateArray.length; a++) {
      // console.log(dateArray[a][0].getDate() + ' == ' + dateOfDownload.getDate() + ' ?')
      if (dateArray[a][0].getDate() == dateOfDownload.getDate()) {
        dateArray[a][1]++;
      }
    }
  });

  //convert date to UTC
  dateArray.forEach(function(element) {
    element[0] = Date.UTC(element[0].getFullYear(), element[0].getMonth(), element[0].getDate(), 0, 0, 0, 0);
  });

  return dateArray;
}

function tallyFeedback(feedback) {
  var now = new Date();
  var start = new Date(now.getFullYear(), now.getMonth(), 1);
  var end = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  var dateArray = getArrayOfDates(start, end);

  feedback.forEach(function(record) {
    var d = new Date(record.createdAt);

    var dateOfFeedback = new Date(d.getFullYear(), d.getMonth(), d.getDate());

    for (let a = 0; a < dateArray.length; a++) {
      if (dateArray[a][0].getDate() == dateOfFeedback.getDate()) {
        dateArray[a][1]++;
      }
    }
  });

  //convert date to UTC
  dateArray.forEach(function(element) {
    element[0] = Date.UTC(element[0].getFullYear(), element[0].getMonth(), element[0].getDate(), 0, 0, 0, 0);
  });

  return dateArray;
}

function getArrayOfDates(start, end) {
  var dateArray = new Array();
  var currentDate = new Date(start);

  while (currentDate <= new Date(end)) {
    dateArray.push([new Date(currentDate), 0]);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateArray;
}

function getMonthWord(m) {
  var monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];

  return monthNames[m];
}
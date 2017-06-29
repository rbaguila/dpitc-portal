$(function() {

  // $.ajax({
  //   method: 'GET',
  //   url: '/eresources/reports',
  //   success: function() {
  //     console.log('Ready??');
  //   }
  // })

  var downloads = $.getJSON('/api/publications/downloads/current-month', function(data) {
  });

  // var feedback =

  $.when(downloads).done(function(downloads) {
    var downloadsTally = tallyDownloads(downloads);

    renderCurrentMonthData(downloadsTally);
  });

})

function renderCurrentMonthData(downloads) {
  Highcharts.chart('downloads-chart', {

    title: {
        text: 'Downloads & Feedback for all publications for the month of <b>' + getMonthWord((new Date()).getMonth()) + '</b>'
    },

    yAxis: {
        title: {
            text: 'Number of feedback and downloads'
        }
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
      }
    ]

  });
}

function tallyDownloads(downloads) {
  var now = new Date();
  var start = new Date(now.getFullYear(), now.getMonth(), 1);
  var end = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  // Get array of dates for current month
  var dateArray = getArrayOfDates(start, end);

  // Tally downloads
  downloads.forEach(function(element) {
    var d = new Date(element.date);

    var dateOfDownload = new Date(d.getFullYear(), d.getMonth(), d. getDate())

    for (let a = 0; a < dateArray.length; a++) {
      if (dateArray[a][0].getDate() == dateOfDownload.getDate()) {
        dateArray[a][1]++
      }
    }

  });

  //convert date to UTC
  dateArray.forEach(function(element) {
    element[0] = Date.UTC(element[0].getFullYear(), element[0].getMonth(), element[0].getDate(), 0, 0, 0, 0);
  })

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

  return dateArray;
}

function getMonthWord(m) {
  var monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];

  return monthNames[m];
}
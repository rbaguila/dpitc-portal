$(document).ready(function() {
  $.get('/api/community/analytics/list', function(data) {
    var views = {};

    $.each(data.views, function(i, item) {
      var date = new Date(item.time)
      var key = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());

      if(views[key]) views[key] += 1;
      else views[key] = 1;
    });

    var series = [];

    $.each(views, function(key, value) {
      series.push([parseInt(key), value]);
    });

    Highcharts.stockChart('active-users', {
        navigator: {
            enabled: false
        },
        rangeSelector: {
        	selected: 1
        },
        title: {
            text: 'Community access rate over time'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: 'Access rate'
            },
            opposite: false
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },

        series: [{
            type: 'area',
            data: series,
            name: 'Visits'
        }]
    });

    var provinceData = [];
    var provinceCount = {};
    $.each(data.views, function(i, item) {
      var key = item.region

      if(provinceCount[key]) provinceCount[key] += 1;
      else provinceCount[key] = 1;
    });

    $.each(provinceCount, function(key, value) {
      provinceData.push({
        name: key,
        y: value
      })
    });

    Highcharts.chart('provinces', {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Browser market shares. January, 2015 to May, 2015'
      },
      subtitle: {
          text: ''
      },
      xAxis: {
          type: 'category',
          labels: {
            autoRotation: 0
          }
      },
      yAxis: {
          title: {
              text: 'Total percent market share'
          }

      },
      legend: {
          enabled: false
      },
      plotOptions: {
          series: {
              borderWidth: 0,
          }
      },

      series: [{
          name: 'Vists',
          colorByPoint: true,
          data: provinceData
      }]
    });
  });

  Highcharts.chart('agriculture', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Agriculture'
      },
      exporting: {
          enabled: false
      },
      plotOptions: {
              pie: {
                  innerSize: '60%',
                  dataLabels: {
                      enabled: false
                  }
              }
      },
      series: [{
          name: 'Count',
          colorByPoint: true,
          data: [{
              name: 'News',
              y: 56
          }, {
              name: 'Blogs',
              y: 24
          }, {
              name: 'Discussions',
              y: 10
          }, {
              name: 'Events',
              y: 6
          }]
      }]
  });

  Highcharts.chart('aquaculture', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Aquaculture'
      },
      exporting: {
          enabled: false
      },
      plotOptions: {
              pie: {
                  innerSize: '60%',
                  dataLabels: {
                      enabled: false
                  }
              }
      },
      series: [{
          name: 'Count',
          colorByPoint: true,
          data: [{
              name: 'News',
              y: 56
          }, {
              name: 'Blogs',
              y: 24
          }, {
              name: 'Discussions',
              y: 10
          }, {
              name: 'Events',
              y: 6
          }]
      }]
  });

  Highcharts.chart('nresources', {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Natural Resources'
      },
      exporting: {
          enabled: false
      },
      plotOptions: {
              pie: {
                  innerSize: '60%',
                  dataLabels: {
                      enabled: false
                  }
              }
      },
      series: [{
          name: 'Count',
          colorByPoint: true,
          data: [{
              name: 'News',
              y: 56
          }, {
              name: 'Blogs',
              y: 24
          }, {
              name: 'Discussions',
              y: 10
          }, {
              name: 'Events',
              y: 6
          }]
      }]
  });



  $('.highcharts-credits').css('display', 'none');

});

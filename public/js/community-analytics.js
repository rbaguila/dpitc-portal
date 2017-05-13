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
            name: 'Visits',
            cursor: 'pointer',
            events: {
                click: function(e) {
                  var dayViews = data.views.filter(function(item) {
                    return moment(item.time).isSame(e.point.x, 'day');
                  });
                  updateLogs(dayViews);
                }
            }
        }]
    });

    var regionData = [];
    var regionCount = {};
    var cityData = [];
    var cityCount = [];
    $.each(data.views, function(i, item) {
      var key = item.region;
      var key2 = item.city;

      if(regionCount[key]) {
        regionCount[key].count += 1;

        if(regionCount[key].cities[key2]) regionCount[key].cities[key2] += 1;
        else regionCount[key].cities[key2] = 1;
      }
      else {
        regionCount[key] = {
          count: 1,
          cities: {}
        }
        regionCount[key].cities[key2] = 1
      }
    });

    $.each(regionCount, function(key, value) {
      regionData.push({
        id: key,
        name: key,
        value: value.count
      });

      $.each(value.cities, function(key2, value2) {
        cityData.push({
          name: key2,
          parent: key,
          value: value2
        });
      });
    });

    drillup(regionData);

    Highcharts.chart('regions', {
      title: {
          text: 'Number of visits per Region'
      },
      exporting: {
          enabled: false
      },
      chart: {
        events: {
          redraw: function() {
            var rootNode = this.series[0].rootNode;
            if(rootNode==='') {
              drillup(regionData);
            }
          }
        }
      },
      series: [{
          type: 'treemap',
          layoutAlgorithm: 'squarified',
          alternateStartingDirection: true,
          allowDrillToNode: true,
          levelIsConstant: false,
          cursor: 'pointer',
          events: {
              click: function(e) {
                if(e.point.id) {
                  drilldown(e.point.node.children);
                }
                else if(!e.point.id) {
                  var cityViews = data.views.filter(function(view) {
                    return view.city == e.point.name;
                  });
                  drilldown_2(cityViews);
                }
              }
          },
          dataLabels: {
              enabled: false
          },
          levels: [{
              level: 1,
              dataLabels: {
                  enabled: true
              },
              borderWidth: 3
          }],
          data: regionData.concat(cityData)
      }]
    });
  });

  $.get('/api/community/analytics/list/view/groups', function(data) {
    var groupData = {};
    var industryData = [{name: 'def', y: 0}];

    $.get('/api/community/analytics/list/groups', function(list) {
      $.each(data.views, function(i, item) {
        var groups = list.groups.filter(function(g) {
          return g.handle == item.handle;
        })

        if(groups[0]){
          var key = groups[0].classification.industry;

          if(groupData[key]) groupData[key] += 1;
          else groupData[key] = 1;
        }
      });

      $.each(groupData, function(key, value) {
        industryData.push({
          name: key,
          y: value
        });
      });

      Highcharts.chart('groups', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          events: {
            load: function() {
              this.innerText = this.renderer.text(this.series[0].total, this.chartWidth/2, this.chartHeight*.6).css({
                margin: '0 auto',
                color: 'gray',
                fontSize: '2.5em',
                textAlign: 'center'
              }).attr('text-anchor', 'middle').add();
            }
          }
        },
        title: {
          text: 'Group Views'
        },
        exporting: {
          enabled: false
        },
        plotOptions: {
          pie: {
            innerSize: '60%',
            dataLabels: {
              enabled: false
            },
            events: {
              mouseOver: function(e){
                var hovered = this.data.filter(function(item) {
                  return item.state == 'hover';
                });

                this.chart.innerText.attr({text: hovered[0].y});
              },
              mouseOut: function(){
                this.chart.innerText.attr({text: this.total});
              }
            }
          }
        },
        series: [{
          name: 'Count',
          colorByPoint: true,
          data: industryData
        }]
      });
    });
  });


  $.get('/api/community/analytics/list/view/events', function(data) {
    var groupData = {};
    var eventData = [];

    $.get('/api/community/analytics/list/events', function(list) {
      $.each(data.views, function(i, item) {
        var events = list.posts.filter(function(g) {
          return g._id == item.eventID;
        })

        if(events[0]) {
        var key = events[0].groupBelonged.charAt(0).toUpperCase() + events[0].groupBelonged.slice(1);

          if(groupData[key]) groupData[key] += 1;
          else groupData[key] = 1;
        }
      });

      $.each(groupData, function(key, value) {
        eventData.push({
          name: key,
          y: value
        });
      });

      Highcharts.chart('events', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          events: {
            load: function() {
              this.innerText = this.renderer.text(this.series[0].total, this.chartWidth/2, this.chartHeight*.6).css({
                margin: '0 auto',
                color: 'gray',
                fontSize: '2.5em',
                textAlign: 'center'
              }).attr('text-anchor', 'middle').add();
            }
          }
        },
        title: {
          text: 'Event Views'
        },
        exporting: {
          enabled: false
        },
        plotOptions: {
          pie: {
            innerSize: '60%',
            dataLabels: {
              enabled: false
            },
            events: {
              mouseOver: function(e){
                var hovered = this.data.filter(function(item) {
                  return item.state == 'hover';
                });

                this.chart.innerText.attr({text: hovered[0].y});
              },
              mouseOut: function(){
                this.chart.innerText.attr({text: this.total});
              }
            }
          }
        },
        series: [{
          name: 'Count',
          colorByPoint: true,
          data: eventData
        }]
      });
    });
  });

  $.get('/api/community/analytics/list/view/reports', function(data) {
    var groupData = {};
    var reportData = [];

    $.get('/api/community/analytics/list/reports', function(list) {
      $.each(data.views, function(i, item) {
        var reports = list.posts.filter(function(g) {
          return g._id == item.reportID;
        })

        if(reports[0]) {
          var key = reports[0].groupBelonged.charAt(0).toUpperCase() + reports[0].groupBelonged.slice(1);

          if(groupData[key]) groupData[key] += 1;
          else groupData[key] = 1;
        }
      });

      $.each(groupData, function(key, value) {
        reportData.push({
          name: key,
          y: value
        });
      });

      Highcharts.chart('reports', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          events: {
            load: function() {
              this.innerText = this.renderer.text(this.series[0].total, this.chartWidth/2, this.chartHeight*.6).css({
                margin: '0 auto',
                color: 'gray',
                fontSize: '2.5em',
                textAlign: 'center'
              }).attr('text-anchor', 'middle').add();
            }
          }
        },
        title: {
          text: 'Reports Views'
        },
        exporting: {
          enabled: false
        },
        plotOptions: {
          pie: {
            innerSize: '60%',
            dataLabels: {
              enabled: false
            },
            events: {
              mouseOver: function(e){
                var hovered = this.data.filter(function(item) {
                  return item.state == 'hover';
                });

                this.chart.innerText.attr({text: hovered[0].y});
              },
              mouseOut: function(){
                this.chart.innerText.attr({text: this.total});
              }
            }
          }
        },
        series: [{
          name: 'Count',
          colorByPoint: true,
          data: reportData
        }]
      });
    });
  });

  $.get('/api/community/analytics/list/view/discussions', function(data) {
    var groupData = {};
    var discussionData = [];

    $.get('/api/community/analytics/list/discussions', function(list) {
      $.each(data.views, function(i, item) {
        var discussions = list.posts.filter(function(g) {
          return g._id == item.discussionID;
        })

        if(discussions[0]) {
          var key = discussions[0].groupBelonged.charAt(0).toUpperCase() + discussions[0].groupBelonged.slice(1);

          if(groupData[key]) groupData[key] += 1;
          else groupData[key] = 1;
        }
      });

      $.each(groupData, function(key, value) {
        discussionData.push({
          name: key,
          y: value
        });
      });

      Highcharts.chart('discussions', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          events: {
            load: function() {
              this.innerText = this.renderer.text(this.series[0].total, this.chartWidth/2, this.chartHeight*.6).css({
                margin: '0 auto',
                color: 'gray',
                fontSize: '2.5em',
                textAlign: 'center'
              }).attr('text-anchor', 'middle').add();
            }
          }
        },
        title: {
          text: 'Discussion Views'
        },
        exporting: {
          enabled: false
        },
        plotOptions: {
          pie: {
            innerSize: '60%',
            dataLabels: {
              enabled: false
            },
            events: {
              mouseOver: function(e){
                var hovered = this.data.filter(function(item) {
                  return item.state == 'hover';
                });

                this.chart.innerText.attr({text: hovered[0].y});
              },
              mouseOut: function(){
                this.chart.innerText.attr({text: this.total});
              }
            }
          }
        },
        series: [{
          name: 'Count',
          colorByPoint: true,
          data: discussionData
        }]
      });
    });
  });

  var drilldown = function(data) {
    $('#demographics .section-content table tbody').html("");
    $('#demographics .thead1').html("City/Province");
    for(var i=0; i<data.length; i++) {
      $('#demographics .section-content table').append(
        "<tr>" +
          "<td>"+data[i].name+"</td>" +
          "<td>"+data[i].val+"</td>" +
        "</tr>"
      ).trigger('update');
    }
  }

  var drilldown_2 = function(data) {
    $('#demographics .thead1').html("#");
    $('#demographics .thead2').html("City/Province");
    $('#demographics .thead3').show();

    $('#demographics .section-content table tbody').html("");
    for(var i=0; i<data.length; i++) {
      $('#demographics .section-content table tbody').append(
        "<tr>" +
          "<td>"+(i+1)+"</td>" +
          "<td>"+data[i].city+"</td>" +
          "<td>"+moment(data[i].time).format('M-DD-YYYY HH:mm')+"</td>" +
        "</tr>"
      ).trigger('update');
    }
  }

  var drillup = function(data) {
    $('#demographics .thead1').html("Region");
    $('#demographics .thead2').html("Visits");
    $('#demographics .thead3').hide();
    $('#demographics .section-content table tbody').html("");
    for(var i=0; i<data.length; i++) {
      $('#demographics .section-content table tbody').append(
        "<tr>" +
          "<td>"+data[i].name+"</td>" +
          "<td>"+data[i].value+"</td>" +
        "</tr>"
      ).trigger('update');
    }
  }

  var recLog = '';
  var updateLogs = function(data) {
    recLog = $('#page-visits table tbody').html();

    $('#page-visits table tbody').html("");
    $("#page-visits .refresh-btn").show();
    for(var i=0; i<data.length; i++) {
      $('#page-visits table tbody').append(
        "<tr>" +
          "<td>"+data[i].region+"</td>" +
          "<td>"+data[i].city+"</td>" +
          "<td>"+moment(data[i].time).format('M-DD-YYYY HH:mm')+"</td>" +
        "</tr>"
      ).trigger('update');
    }
  }

  $("#page-visits .refresh-btn").click(function(e) {
    $(this).hide();
    $('#page-visits table tbody').html("");
    $('#page-visits table tbody').append(recLog);
  });

  $('#demographics .section-content table').tablesorter({
    headerTemplate: '{content}{icon}',
    sortList: [[1,1]]
  });
  $('#page-visits .section-content table').tablesorter({
    headerTemplate: '{content}{icon}'
  });
  $('.highcharts-credits').css('display', 'none');

});

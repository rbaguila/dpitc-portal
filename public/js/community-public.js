$(document).ready(function() {
    var geoloc = {}

    $('.wrapper .section').theiaStickySidebar();

    $.getJSON('https://freegeoip.net/json/', function(data){
      geoloc = {
        ip: data.ip,
        city: data.city,
        region: data.region_name,
        loc: data.latitude+','+data.longitude
      };

      $.ajax({
        type: 'POST',
        url: '/api/community/analytics/community',
        data: geoloc
      });
    });

    $('.discussion .summary a').click(function(e) {
      e.preventDefault();

      var temp = this.href.split('/');
      geoloc['discussionID'] = temp[temp.length-1];

      $.ajax({
        type: 'POST',
        url: '/api/community/analytics/discussion',
        data: geoloc
      });

      window.location = this.href;
    });

    $('.groups a').click(function(e) {
      e.preventDefault();

      var temp = this.href.split('/');
      geoloc['handle'] = temp[temp.length-1];

      $.ajax({
        type: 'POST',
        url: '/api/community/analytics/groups',
        data: geoloc
      });

      window.location = this.href;
    });

    $('.event a').click(function(e) {
      e.preventDefault();

      var temp = this.href.split('/');
      geoloc['eventID'] = temp[temp.length-1];

      console.log(geoloc)

      $.ajax({
        type: 'POST',
        url: '/api/community/analytics/event',
        data: geoloc
      });

      window.location = this.href;
    });

    $('.blog .title').click(function(e) {
      e.preventDefault();

      var temp = this.href.split('/');
      geoloc['reportID'] = temp[temp.length-1];

      console.log(geoloc)

      $.ajax({
        type: 'POST',
        url: '/api/community/analytics/report',
        data: geoloc
      });

      window.location = this.href;
    });

})

$(document).ready(function() {
    var geoloc = {}

    $('#multimedia').lightGallery({
      thumbnail: true
    });

    $('.wrapper .section').theiaStickySidebar();

    $.getJSON('https://ipinfo.io', function(data){
      geoloc = data;
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

      console.log(geoloc)

      $.ajax({
        type: 'POST',
        url: '/api/community/analytics/groups',
        data: geoloc
      });

      window.location = this.href;
    });

})

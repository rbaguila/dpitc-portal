$(document).ready(function() {
    var geoloc = {}

    $('.wrapper .section').theiaStickySidebar();


    $('.grid').masonry({
      itemSelector: '.grid-item',
      columnWidth: '.grid-sizer',
      percentPosition: true
    });
    $('.grid').imagesLoaded(function() {
      $('.grid').masonry('layout');
    })

    var updateBoardDisplay = function(tags) {
      var gridItems = $('.grid-item');
      var dataTags = [];

      for(var i=0; i<gridItems.length; i++) {
        dataTags = JSON.parse($(gridItems[i]).attr('data-tags'));
        $(gridItems[i]).show();
        $('.grid').masonry({
          itemSelector: '.grid-item',
          columnWidth: '.grid-sizer',
          percentPosition: true
        });

        for(var j=0; j<tags.length; j++) {
          if($.inArray(tags[j], dataTags) == -1) {
            $(gridItems[i]).hide();
            $('.grid').masonry({
              itemSelector: '.grid-item',
              columnWidth: '.grid-sizer',
              percentPosition: true
            });
            break;
          }
        }
      }
    }

    $('.tags .tag').click(function() {
      $(this).toggleClass("active");

      var actives = $('.tags .tag.active');
      var tags = [];
      for(var i=0; i<actives.length; i++) {
        tags.push($(actives[i]).html().slice(1))
      }
      updateBoardDisplay(tags);
    })

    $('.avatar-img').each(function(item) {
      var host = 'https://community.dpitc.net/'
      var id = $(this).attr('data-auth');
      var user = {};

      $.ajax({
        type: 'GET',
        url: host+'api/users/'+id,
        success: function(data) {
          if(data.user.photo) {
            $(this).attr('src', host+data.user.photo.filename);
          }
          else {
            $(this).attr('src', 'http://placehold.it/100x100');
          }
        },
        error: function(req, status, err) {
          $(this).attr('src', 'http://placehold.it/100x100');
        }
      });
    });

    /***      View Queries      ***/
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

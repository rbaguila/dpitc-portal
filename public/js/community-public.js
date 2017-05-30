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
    });

    var displaySorted = function(items) {
      $('.grid-item').remove();

      for(var i=0; i<items.length; i++) {
        $('.grid').append(items[i]);
        $('.grid').masonry('reloadItems');
        $('.grid').masonry('layout');
      }
    }

    var sortDate = function(mode) {
      var gridItems = $('.grid-item');

      if(mode) {
        gridItems.sort(function(a, b) {
          a = moment($(a).attr('data-time'), 'MMMM Do YYYY, h:mm:SS a');
          b = moment($(b).attr('data-time'), 'MMMM Do YYYY, h:mm:SS a')
          return a.isAfter(b) ? -1 : a.isBefore(b) ? 1 : 0;
        });
        displaySorted(gridItems);
      } else {
        gridItems.sort(function(a, b) {
          a = moment($(a).attr('data-time'), 'MMMM Do YYYY, h:mm:SS a');
          b = moment($(b).attr('data-time'), 'MMMM Do YYYY, h:mm:SS a')
          return a.isBefore(b) ? -1 : a.isAfter(b) ? 1 : 0;
        });
        displaySorted(gridItems);
      }
    }

    var sortTitle = function(mode) {
      var gridItems = $('.grid-item');

      if(mode) {
        gridItems.sort(function(a, b) {
          a = $(a).find('.title span').html();
          b = $(b).find('.title span').html();
          return a<b ? -1 : a>b ? 1 : 0;
        });
        displaySorted(gridItems);
      } else {
        gridItems.sort(function(a, b) {
          a = $(a).find('.title span').html();
          b = $(b).find('.title span').html();
          return a>b ? -1 : a<b ? 1 : 0;
        });
        displaySorted(gridItems);
      }
    }

    $('.sort-date').click(function() {
      $('.sort-title').removeClass('active');

      if($('.sort-date i').hasClass('fa-caret-up') || !$(this).hasClass('active')) {
        $('.sort-date i').removeClass('fa-caret-up');
        $('.sort-date i').addClass('fa-caret-down');
        sortDate(1);
      } else {
        $('.sort-date i').addClass('fa-caret-up');
        $('.sort-date i').removeClass('fa-caret-down');
        sortDate(0);
      }

      $(this).addClass('active');
    });

    $('.sort-title').click(function() {
      $('.sort-date').removeClass('active');

      if($('.sort-title i').hasClass('fa-caret-up') || !$(this).hasClass('active')) {
        $('.sort-title i').removeClass('fa-caret-up');
        $('.sort-title i').addClass('fa-caret-down');
        sortTitle(1);
      } else {
        $('.sort-title i').addClass('fa-caret-up');
        $('.sort-title i').removeClass('fa-caret-down');
        sortTitle(0);
      }

      $(this).addClass('active');
    });

    $('.avatar-img').each(function(item) {
      var host = 'https://community.dpitc.net/'
      var id = $(this).attr('data-auth');
      var user = {};

      $(this).attr('src', 'http://placehold.it/100x100');

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

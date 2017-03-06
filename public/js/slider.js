$(document).ready(function(){
	// $('.slick-slider').slick({
	// 	lazyLoad: 'ondemand',
	//   slidesToShow: 3,
	//   slidesToScroll: 1
	// });

	$('#btn-exhibit').css('background', 'rgba(255,255,255,0.1)');

  $('.btn-see-more').click(function() {
    $('html,body').animate({
      scrollTop: $("#exhibit-list").offset().top - ($("#exhibit-list").offset().top * .1)},
    'slow');
  });

  $('#btn-exhibit').click(function() {
    $('html,body').animate({
      scrollTop: 0},
    'slow');
  });

  $('.thumbnail-content').click(function(e) {
    $('#main-img').attr('src', '/images/exhibit/'+e.target.id+'.png');
    if(e.target.id == 'exhibit_2'){
      $('#event-title').html("<b>Sweet Potato FIESTA (2016)</b>");
      $('#event-text').html("<b> Commodity: </b> Sweet Potato <br/> <b> Date: </b> March 17-18, 2016 <br/> <b>Venue: </b> Tarlac College of Agriculture Camiling, Tarlac City <br/><b> Consortium: </b>Central Luzon Agriculture Resources Research and Development Consortium (CLARRDEC) </li>")
    }
    else if(e.target.id == 'exhibit_3'){
       $('#event-title').html("<b>Rootcrop FIESTA (2015)</b>");
       $('#event-text').html("<b> Commodity: </b> Rootcrops <br/> <b> Date: </b> August 10-11, 2014 <br/> <b>Venue: </b> Visayas State University, Baybay, Leyte <br/><b> Consortium: </b>VICARP </li>")
     }
    else {
      $('#event-title').html("<b>Seaweed FIESTA(2014)</b>");
      $('#event-text').html("<b> Commodity: </b> Seaweed <br/> <b> Date: </b> November 27-28, 2014 <br/> <b>Venue: </b> Passig Islet, Brgy. Bato, Sta. Cruz, Davao del Sur <br/><b> Consortium: </b> Southern Mindanao Agriculture  Resources Research and development Consortium (SMARRDEC)</li>")
    }
    $('.thumbnail-content').removeClass('current-img');
    $('#'+e.target.id).addClass('current-img');
  });

  // changeMainImg();
});

function toggleButton() {
    var x = document.getElementById('searchDiv');
    
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById('carousel').style.marginTop = "10px";
        document.getElementById('toggleIcon').className = "fa";
        document.getElementById('toggleIcon').className += " fa-close";

    } else {
        x.style.display = 'none';
        document.getElementById('carousel').style.marginTop = "85px";
        document.getElementById('toggleIcon').className = "fa";
        document.getElementById('toggleIcon').className += " fa-search";
    }
}

function changeMainImg(){
  setTimeout(function(){
      var src = document.getElementById('main-img').src;
      var index = src[src.length - 5];
      var indexInt = parseInt(index);
      if(indexInt == 4) indexInt = 0;
      indexInt = indexInt + 1;
      var index = indexInt.toString();
      $('#main-img').fadeOut(1500, function(){
          var temp = '/images/exhibit/exhibit_'+index+'.png';
          $('#main-img').attr('src', temp);
          $('.thumbnail-content').removeClass('current-img');
          $('#exhibit_'+index).addClass('current-img');
          $('#main-img').fadeIn(1500);
          if(index == '2'){
            $('#event-title').html("<b>Sweet Potato FIESTA (2016)</b>");
            $('#event-text').html("<b> Commodity: </b> Sweet Potato <br/> <b> Date: </b> March 17-18, 2016 <br/> <b>Venue: </b> Tarlac College of Agriculture Camiling, Tarlac City <br/><b> Consortium: </b>Central Luzon Agriculture Resources Research and Development Consortium (CLARRDEC) </li>")
          }
          else if(index == '3'){
             $('#event-title').html("<b>Rootcrop FIESTA (2015)</b>");
             $('#event-text').html("<b> Commodity: </b> Rootcrops <br/> <b> Date: </b> August 10-11, 2014 <br/> <b>Venue: </b> Visayas State University, Baybay, Leyte <br/><b> Consortium: </b>VICARP </li>")
           }
          else {
            $('#event-title').html("<b>Seaweed FIESTA(2014)</b>");
            $('#event-text').html("<b> Commodity: </b> Seaweed <br/> <b> Date: </b> November 27-28, 2014 <br/> <b>Venue: </b> Passig Islet, Brgy. Bato, Sta. Cruz, Davao del Sur <br/><b> Consortium: </b> Southern Mindanao Agriculture  Resources Research and development Consortium (SMARRDEC)</li>")
          }
          changeMainImg();
      });
    }, 5000);
}

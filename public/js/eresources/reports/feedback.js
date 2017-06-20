$(document).ready(function() {

  // var modalTriggers = $(".modal-trigger");

  // console.log(modalTriggers);
  $('.modal-trigger').on('click', function() {
    console.log(this);
    $('h4#myModalLabel.modal-title').html('Select feedback date range for <u>' + $(this).attr('pubtitle') + '</u>');

    $('#hidden-pubid').val($(this).attr('pubid'));
    $('#hidden-pubtitle').val($(this).attr('pubtitle'));

    })

})
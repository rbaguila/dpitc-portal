$(document).ready(function(){
    $(".dropdown-menu li a").click(function(){
      $(this).closest('.btn-group').find(".btn:first-child").text($(this).text());
      $(this).closest('.btn-group').find(".btn:first-child").val($(this).text());
      $(this).closest('.btn-group').find(".btn:first-child").append('&nbsp<span class="caret"></span>');
   });
    $(".dropdown-menu li a").css('cursor', 'pointer');
});

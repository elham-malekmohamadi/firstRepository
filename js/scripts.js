$(".dropdown-list").click(function () {
  $(".mainDropDownMenu").toggle();
});

// mobilemenu
$(".iconbar").click(function(){
  $(".mainmenuMobile").toggle();
  if ($('.mainDropDownMenuMobile').css('display') == 'block') {
    $('.mainDropDownMenuMobile').css({'display':'none'});
  }
});
$(".dropdown-list-mobile").click(function () {
  $(".mainDropDownMenuMobile").toggle();
});

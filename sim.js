$(".formIn").hide();
$(".send-req").click(function () {
  $(".formIn").slideToggle();

});
$(".formbutton").click(function () {
  $(".formIn").slideToggle();
});
$(".formbutton").click(function () {
  $(".send-req").text("requested").css("background","green").effect('shake');
});

$(document).ready(function () {
  $("#openModal").click(function () {
    $("#modal").fadeIn();
  });

  $(".close").click(function () {
    $("#modal").fadeOut();
  });
});

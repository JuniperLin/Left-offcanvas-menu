$(document).ready(function () {
  $(".hamburger").click(function (e) {
    event.preventDefault();
    $("body").toggleClass("side-open");
  });
});

$(".togglePassword").click(function () {
  var parent = $(this).parent().parent().find(".password");

  if (parent.attr("type") === "password") {
    parent.attr("type", "text");
    $(this).toggleClass("fa-eye-slash");
  } else {
    parent.attr("type", "password");
    $(this).toggleClass("fa-eye-slash");
  }
});

$(function() {
  $("#formOne").submit(function(event) {
    var userInput = $("input#user").val().toUpperCase();

    $(".output").text(userInput + "!!!");

    event.preventDefault();
  });
});

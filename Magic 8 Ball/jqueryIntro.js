$(document).ready(function() {
  var responses = ["Yup!", "Fuhgeddaboudit", "Maybe", "Ask: what would your mother do?", "Ask: what would an Australian do, then do the opposite", "Your answer here.","Nope","Sure, why not?", "57", "2 Chainz"];

  $("#submit").on("click", function() {
    var randomNum = Math.floor(Math.random()*10);
    // alert($("#question").val());
    $("#printQuestion").text($("#question").val());
    $("#answer").text(responses[randomNum]);
    $("#question").val("");
  });

});

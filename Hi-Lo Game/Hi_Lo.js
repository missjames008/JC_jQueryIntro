$(document).ready(function() {
//generating a random number between 1-100
  var random = Math.floor(Math.random() * (100 - 1)) + 1;
  console.log("the number is: " + random);
//tracking number of guesses (initializing at 7 and counting down)
  var counter = 7;

//adds functionality to Submit button on click
  $("#submit").on("click", function() {
//if remaining guesses is less than three, styling turns 'p' tags red
    if ($("#count").text() === "3") {
      $("p").addClass("whatevertheFuck");
    }
//creates condition for feedback if counter reaches 0
    if ($("#count").text() === "0") {
      $("#feedback").text("Out of guesses! You lose!");
      $("#submit").off("click");
      $("#guess").val("");
    }
    else {
      if (parseInt($("#guess").val()) > random) {
        $("#feedback").text("Sorry! Your guess is too high!");
        $("#previous").append("<p>Guess: " + $("#guess").val() + "; Response: " + $("#feedback").text() + "</p>");
      }
      else if (parseInt($("#guess").val()) < random) {
        $("#feedback").text("Sorry! Your guess is too low!");
        $("#previous").append("<p>Guess: " + $("#guess").val() + "; Response: " + $("#feedback").text() + "</p>");

      }
      else if (parseInt($("#guess").val()) === random) {
        $("#feedback").text("You Won!");
        $("#submit").hide();
        $("#guess").hide();
      }
      else {
        $("#feedback").text("You Broke It Somehow, Try Again Ya Idiot (Maybe Try Numbers Only?)");
        $("#previous").append("<p>Guess: " + $("#guess").val() + "; Response: " + $("#feedback").text() + "</p>");

      }
      counter--;
      $("#count").text(counter);
      $("#guess").val("");
    }
  });
});

// function hiLo() {
//   var userName = prompt("Please Input Your Name Below");
//   var rand = Math.floor(Math.random() * (100 - 1)) + 1;;
//   alert("The random number is: " + rand);
//   var counter = 7;
//   do {
//     var user = prompt("Guess a Integer Between 1 and 100!")
//     if (isNaN(user)) {
//       alert("Hey! This isn't a number ya dummy!");
//     }
//     else {
//       if (user != rand) {
//         alert("Sorry! Wrong Guess! You have " + counter-1 + " guesses left!");
//       }
//       else {
//         alert("Congrats! You guessed the correct number of: " + user + " = " + rand);
//       }
//       counter--;
//       if (counter === 0) {
//         alert("Uh Oh, you've ran out of guesses!");
//         break;
//       }
//     }
//   } while (user != rand);
//
//   if (parseInt(user) === rand) {
//   alert ("Congrats " + userName + "! You Won!");
//   }
//   else {
//     alert("Sorry, You Lose!")
//   }
// }

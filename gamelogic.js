$(document).ready(function() {
    var buttonChoices = ["pirate", "ninja", "zombie"];

      function randomButton() {
      var randomIndex = Math.floor(Math.random() * buttonChoices.length);
      $(".btn-primary").html(buttonChoices[randomIndex]).attr("data-selection", randomIndex);
    }
 
      $(".btn-primary").on("click", function() {
      var computerChoice = Math.floor(Math.random() * buttonChoices.length);
      var userChoice = parseInt($(this).attr("data-selection"));

        if(computerChoice === userChoice) {
          alert("Same choice. No points.");
        } else if(computerChoice === 0 && userChoice === 1) {
          //Computer gets a point
          alert("Computer gets a point!");
        } else if(computerChoice === 1 && userChoice === 0) {
          //User gets a point
        } alert("User gets a point!");
      }

      randomButton();
    });

  randomButton();
});  


//  function bindControls() {
//    $(".btn-primary").on("click", function() {
//      var userChoice = $(this).attr("data-choice");
//      console.log(userChoice);
//      var computerChoice = Math.floor(Math.random() * choices.length);
//      console.log(choices[computerChoice]);
//      gameLogic(userChoice, computerChoice);
//  });
//});

//function bindControls() {
//$(document).on("click", "#reset-button", function() {
//      restoreDefault();
//    });     
 
// function gameLogic(userChoice, computerChoice) {

 //for wins

// if (userChoice === "pirate" && choices[computerChoice] === "ninja")  {
//    pirateNinja ();
//    computerWin();
//} else if (userChoice === "pirate" && choices[computerChoice] === "zombie") {
//    pirateZombie ();
//    userWin ();
//} else if (userChoice === "pirate" && choices [computerChoice] === "pirate") {
//    ninjaPirate ();
//    userWin ();
//} else if (userChoice === "ninja" && choices [computerChoice] === "zombie") {
//    ninjaZombie ();
//    computerWin ();
//} else if (userChoice === "zombie" && choices [computerChoice] === "pirate") {
//     zombiePirate ();
//     computerWin ();
//} else if (userChoice === "zombie" && choices [computerChoice] === "ninja")  {
//     zombieNinja ();
//     userWin ();
//} else if (userChoice === "pirate" && choices [computerChoice] === "pirate") {
//     piratePirate ();
//     tie ();
//} else if (userChoice === "ninja" && choices [computerChoice] === "ninja")  {
//     ninjaNinja ();
//     tie ();
//} else if (userChoice === "zombie" && choices [computerChoice] === "zombie") {
//     zombieZombie ();
//     tie ();
//}

//function roundIncrement() {
//  PNZ.gameState.roundCount === 5 
//   $("#outcome").html("Game over. Why don't you try again?");
//   if (PNZ.gameState.userScore > PNZ.gameState.computerScore) {
//      $("#outcome").append("<div>Hey, wow! You won! Congratulations.</div>");
//  } else if (PNZ.gameState.ties > PNZ.gameState.computerScore && PNZ.gameState.userScore) {
//      $("#outcome").append("<div>You lost, but you can always try again!</div>");
//  } else if (PNZ.gameState.userScore < PNZ.gameState.computerScore) {
//      $("#outcome").append("<div>You lost. Better luck next time!</div>");
//  }
  
//  $(".btn-primary").unbind();
//  $("#reset-button").addClass("btn btn-danger btn-block").append("Play again!");
//  $("#reset-button").show();

// };
//};

//for win

//function userWin() {
//     PNZ.gameState.userScore++;
 //    console.log(PNZ.gameState.userScore);
//     $("#userScore").html(PNZ.gameState.userScore);
//     $("#outcome").html("Hey, wow! You won! Congratulations.");
//};

//function computerWin() {
//     PNZ.gameState.computerScore++;
//     console.log(PNZ.gameState.computerScore);
//     $("#computerScore").html(PNZ.gameState.computerScore);
//     $("#outcome").html("You lost. Better luck next time!");
//};

//function tie() {
 //     PNZ.GameState.ties++;
//      console.log(ties);
//      $("#ties").html(PNZ.gameState.ties);
//      $("#outcome").html("You lost, but you can always try again!");
//};

//function roundIncrement() {
//      PNZ.gameState.roundCount++;
//      $("#roundNumber").html(PNZ.gameState.roundCount);
//      console.log(PNZ.gameState.roundCount);
//};

//here, after the game is played, we restore to default setting

//function restoreDefault() {
//  restoreDefaultScores();
//  $("#outcome").empty();
//  $("#reset-button").empty().hide();
//  $(".btn-primary").bind();
//  bindControls();
//};

//now we restore our default scores to their origional values

//function restoreDefaultScores() {
//     PNZ.gameState.userScore = 0;
//     PNZ.gameState.computerScore = 0;
//     PNZ.gameState.ties = 0;
//     PNZ.gameState.roundCount = 1;
//     $("#userScore").html(PNZ.gameState.userScore);
//     $("#computerScore").html(PNZ.gameState.computerScore);
//     $("#ties").html(PNZ.gameState.ties);
//     $("#roundNumber").html(PNZ.gameState.roundCount);
//};

//window.PNZ = {
//     gameState: {
//      userScore: 0,
//      computerScore: 0,
//      ties: 0,
//      roundCount: 1
//     }
//}

/*var pirateNinja = function() {
      $("#user").removeClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");         
      $("#user").addClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png");
      $("#computer").removeClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").addClass("https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png"); 
  };
var pirateZombie = function() {
      $("#user").removeClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#user").addClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png");
      $("#computer").removeClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").addClass("https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
  };
var ninjaPirate = function() {
      $("#user").removeClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#user").addClass("https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png");
      $("#computer").removeClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").addClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png");
  };

  var ninjaZombie = function() {
      $("#user").removeClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#user").addClass("https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png");
      $("#computer").removeClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").addClass("https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
  };

  var zombiePirate = function() {
      $("#user").removeClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#user").addClass("https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").removeClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").addClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png");
  };

  var zombieNinja = function() {
      $("#user").removeClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#user").addClass("https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").removeClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").addClass("https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png");
  };

  var piratePirate = function() {
      $("#user").removeClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#user").addClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png");
      $("#computer").removeClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").addClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png");
  };

  var ninjaNinja = function() {
      $("#user").removeClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#user").addClass("https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png");
      $("#computer").removeClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").addClass("https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png");
  };

  var zombieZombie = function() {
      $("#user").removeClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#user").addClass("https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").removeClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").addClass("https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
//  };
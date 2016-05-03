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
          $(".modal-body").html("Same choice. No Points.");
        } else if(computerChoice === 0 && userChoice === 1) {
          //Computer gets a point
          $(".modal-body").html("Computer wins!");
          window.gamelogic.gameState.computerScore++;
        } else if(computerChoice === 1 && userChoice === 0) {
          //User gets a point
        } $(".modal-body").html("User wins!");

          window.gamelogic.gameState.userScore++;
        })
        $("#myModal").modal("show");
        window.gamelogic.gameState.roundCount++;

        $("span").each(function() {
          $(this).html(window.gamelogic.gameState[$(this).attr("id")]);
        });

      var randomButton();
    });

    var randomButton();
  ;  


 function bindControls() {
   $(".btn-primary").on("click", function() {
      var userChoice = $(this).attr("data-choice");
      console.log(userChoice);
      var computerChoice = Math.floor(Math.random() * choices.length);
      console.log(choices[computerChoice]);
      window.gameLogic(userChoice, computerChoice);
  });
};

function bindControls() {
$(document).on("click", "#reset-button", function() {
      restoreDefault();
    });     

function roundIncrement() {
  PNZ.gameState.roundCount === 5 
   $("#outcome").html("Game over. Why don't you try again?");
   if (PNZ.gameState.userScore > PNZ.gameState.computerScore) {
      $("#outcome").append("<div>Hey, wow! You won! Congratulations.</div>");
  } else if (PNZ.gameState.ties > PNZ.gameState.computerScore && PNZ.gameState.userScore) {
      $("#outcome").append("<div>You lost, but you can always try again!</div>");
  } else if (PNZ.gameState.userScore < PNZ.gameState.computerScore) {
      $("#outcome").append("<div>You lost. Better luck next time!</div>");
  }
  
  $(".btn-primary").unbind();
  $("#reset-button").addClass("btn btn-danger btn-block").append("Play again!");
  $("#reset-button").show();

 };
};

function userWin() {
    PNZ.gameState.userScore++;
    console.log(PNZ.gameState.userScore)
     $("#userScore").html(PNZ.gameState.userScore);
     $("#outcome").html("Hey, wow! You won! Congratulations.");
};

function computerWin() {
     PNZ.gameState.computerScore++;
     console.log(PNZ.gameState.computerScore);
        $("#computerScore").html(PNZ.gameState.computerScore);
        $("#outcome").html("You lost. Better luck next time!");
};

function tie() {
     PNZ.GameState.ties++;
      console.log(ties);
      $("#ties").html(PNZ.gameState.ties);
      $("#outcome").html("You lost, but you can always try again!");
};

function roundIncrement() {
      PNZ.gameState.roundCount++;
      $("#roundNumber").html(PNZ.gameState.roundCount);
      console.log(PNZ.gameState.roundCount);
};

//here, after the game is played, we restore to default setting

function restoreDefault() {
  restoreDefaultScores();
  $("#outcome").empty();
  $("#reset-button").empty().hide();
  $(".btn-primary").bind();
  bindControls();
};

//now we restore our default scores to their origional values

function restoreDefaultScores() {
  PNZ.gameState.userScore = 0;
  PNZ.gameState.computerScore = 0;
  PNZ.gameState.ties = 0;
  PNZ.gameState.roundCount = 1;
  $("#userScore").html(PNZ.gameState.userScore);
  $("#computerScore").html(PNZ.gameState.computerScore);
  $("#ties").html(PNZ.gameState.ties);
  $("#roundNumber").html(PNZ.gameState.roundCount);
};

window.PNZ = {
  gameState: {
    userScore: 0,
    computerScore: 0,
    ties: 0,
    roundCount: 1
  }
};
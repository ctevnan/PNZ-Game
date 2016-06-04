//declare global vars
var playerScore = 0;
var computerScore = 0;
var roundCount = 1;
var playerForWins;
var playerGoChoose = '';
var computerGoChoose = '';
var randomIndex = '';
var computerStrings = [
  'pirate',
  'ninja',
  'zombie'
];

function playersTurn() {
  playerGoChoose = $(this).getAttribute("class");
  playerGoChoose = playerGoChoose.replace('button' , '');
  playerGoChoose = playerGoChoose.replace('control', '');
  playerGoChoose = playerGoChoose.replace('animate', '');
  gameLogic();
  pnzAnimate();
}

//begin pirate ninja zombie animation

function scoreUpdate() {
  $('.player-score .score-value').html(playerScore);
  $('.computer-score .score-value').html(computerScore);
}

function gameLogic() {
  var randomIndex = Math.floor(Math.random() * computerStrings.length);
}

computerGoChoose = computerStrings[randomIndex];

if(playerGoChoose == computerGoChoose) {
  gameState = 'tie';
  roundCount += 1;
}
 
  $(".btn-primary").on("click", function() {
    var computerGoSelect = Math.floor(Math.random() * computerStrings.length);
    var playerGoSelect = parseInt($(this).attr("data-selection"));

        if(computerChoice === userChoice) {
          $(".modal-body").html("Same choice. No Points.");
        } else if(computerGo === 0 && playerGo === 1) {
          //Computer gets a point
          $(".modal-body").html("Computer wins!");
          window.gamelogic.gameState.computerScore++;
        } else if(computerGoSelect === 1 && playerGoSelect === 0) {
          //User gets a point
        } $(".modal-body").html("User wins!");

          window.gamelogic.gameState.playerScore++;
        })
        $("#myModal").modal("show");
        window.gamelogic.gameState.roundCount++;

        $("span").each(function() {
          $(this).html(window.gamelogic.gameState[$(this).attr("id")]);
        });  


 function bindControls() {
   $(".btn-primary").on("click", function() {
      var playerGoSelect = $(this).attr("data-choice");
      console.log(userGoSelect);
      var computerGoSelect = Math.floor(Math.random() * choices.length);
      console.log(choices[computerGoSelect]);
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
$('#myActiveGamescoreModal').modal("hide");
  var buttonChoices = ["pirate", "ninja", "zombie"];

$('.choice-btn').on("click", function() {
   var computerChoice = buttonChoices[Math.floor(Math.random() * buttonChoices.length -1) +1]
   var userChoice = this.getAttribute('data-choice');
   console.log("on click, fire fire fire");
   console.log("user: " + userChoice);
   console.log("computer: " + computerChoice);
    
    function gameLogic(userChoice, computerChoice) {
     //for wins
     if (userChoice === "pirate" && computerChoice === "ninja")  {
        pirateNinja();
        computerWin();
       console.log("logic fired");
     } else if (userChoice === "pirate" && computerChoice === "zombie") {
        pirateZombie();
        userWin();
      console.log("logic fired");
    } else if (userChoice === "pirate" && computerChoice === "pirate") {
        ninjaPirate();
        userWin();
      console.log("logic fired");
    } else if (userChoice === "ninja" && computerChoice === "zombie") {
        ninjaZombie();
        computerWin();
      console.log("logic fired");
    } else if (userChoice === "zombie" && computerChoice === "pirate") {
        zombiePirate();
        computerWin();
      console.log("logic fired");
    } else if (userChoice === "zombie" && computerChoice === "ninja")  {
        zombieNinja();
        userWin();
      console.log("logic fired");
    } else if (userChoice === "pirate" && computerChoice === "pirate") {
        piratePirate();
        tie();
      console.log("logic fired");
    } else if (userChoice === "ninja" && computerChoice === "ninja")  {
        ninjaNinja();
        tie();
      console.log("logic fired");
    } else if (userChoice === "zombie" && computerChoice === "zombie") {
        zombieZombie();
        tie();
      console.log("logic fired");
    } else {
           console.log("logic defaulted missing case?");
    }
}       

$('.choice-btn').on("click", function() {
   var userChoice = this.getAttribute("data-choice");
  })

 var pirateNinja = function() {
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
};
});     
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

window.gameLogic = {
  gameState: {
    userScore: 0,
    computerScore: 0,
    ties: 0,
    roundCount: 1
  }
};  

  $(".btn-info").on("click", function() {
    var tagName = $(this).data("tag");
    window.gamelogic.gameState[tagName]++;

    $("#" + tagName).html(window.gamelogic.gameState[tagName]);
  }); 
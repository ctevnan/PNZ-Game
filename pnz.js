$(document).ready(function(){

var myWords = ["Pirate", "Ninja", "Zombie"];

  $("#changeWordBtn").on("click", function() {
    var myRandomNumber = Math.floor(Math.random() * myWords.length);
    $("h1").html(myWords[myRandomNumber]);

  });
});

  var buttonChoices = ["pirate", "ninja", "zombie"];

  function randomButton() {
    var randomIndex = Math.floor(Math.random() * buttonChoices.length);
    $(".btn-primary").html(buttonChoices[randomIndex]).attr("data-selection", randomIndex);
  }

  $(".btn-primary").on("click", function(){
    var computerChoice = Math.floor(Math.random() * buttonChoices.length);
    var userChoice = parseInt($(this).attr("data-selection"));


    if(computerChoice === userChoice) {
      $(".modal-body").html("Same choice. No points");
    } else if (computerChoice === 0 && userChoice === 1){
      // Computer gets a point
      $(".modal-body").html("Computer wins!");
      pirateNinjaZombie.gameState.computerScore++;
    } else {
      // User gets a point
      $(".modal-body").html("User wins!");
      pirateNinjaZombie.gameState.userScore++;
    }
    $("#myModal").modal("show");
    pirateNinjaZombie.gameState.roundCount++;

    $("span").each(function() {
      $('this').html(pirateNinjaZombie.gameState[$('this').attr("id")]);
    });

  var myWords = ["Pirate", "Ninja", "Zombie"];

  $("#changeWordBtn").on("click", function() {
    var myRandomNumber = Math.floor(Math.random() * myWords.length);
    $("h1").fadeIn(250, function() {
      $(this).html(myWords[myRandomNumber]);
      $(this).fadeOut(1000);
    });

  });


  $("gamebuttons").on("click", function(){
    var bid = $(this).attr("id")
  });
var userChoice = 0;
var computerChoice = 0;
var userScore = 0;
var enemyScore = 0;
var round = 0;


<!-- Button trigger modal -->
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

//return a random string from an array

var choices = ["pirate", "ninja", "zombie"];
//value of btn click
function bindControls(){
  $(".btn-primary").on("click", function() {
    var userChoice = $(this).attr("data-choice");
    console.log(userChoice);
    var computerChoice = Math.floor(Math.random() * choices.length;
    console.log(choices[computerChoice]);
    gameLogic(userChoice, computerChoice);
  });
}

function bindControls(){
$(document).on("click", "#reset-button" , function() {
      restoreDefault();
    });
  }};      
});
 
 function gameLogic(userChoice, computerChoice) {

 //for wins

 if (userChoice === "pirate" && choices[computerChoice] === "ninja")  {
    pirateNinja ();
    computerWin();
} else if (userChoice === "pirate" && choices[computerChoice] === "zombie") {
    pirateZombie ();
    userWin ();
} else if (userChoice === "pirate" && choices [computerChoice] === "pirate") {
    ninjaPirate ();
    userWin ();
} else if (userChoice === "ninja" && choices [computerChoice] === "zombie") {
    ninjaZombie ();
    computerWin ();
} else if (userChoice === "zombie" && choices [computerChoice] === "pirate") {
     zombiePirate ();
     computerWin ();
} else if (userChoice === "zombie" && choices [computerChoice] === "ninja")  {
     zombieNinja ();
     userWin ();
} else if (userChoice === "pirate" && choices [computerChoice] === "pirate") {
     piratePirate ();
     tie ();
} else if (userChoice === "ninja" && choices [computerChoice] === "ninja")  {
     ninjaNinja ();
     tie ();
} else if (userChoice === "zombie" && choices [computerChoice] === "zombie") {
     zombieZombie ();
     tie ();
}

function roundIncrement();

if (PNZ.gameState.roundCount === 5) {
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

//for win

function userWin() {
     PNZ.gameState.userScore++;
     console.log(PNZ.gameState.userScore);
     $("#userScore").html(PNZ.gameState.userScore);
     $("#outcome").html("Hey, wow! You won! Congratulations.");
};

function computerWin() {
     PNZ.gameState.computerScore);
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
  lizardLizard();
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
}

var pirateNinja = function() {
  $("#user").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");         
  $("#user").addClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png");
  $("#computer").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
  $("#computer").addClass("https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png"); 
};

var pirateZombie = function(){
  $("#user").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
  $("#user").addClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png");
  $("#computer").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
  $("#computer").addClass("https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
};

var ninjaPirate = function() {
      $("#user").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#user").addClass("https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png");
      $("#computer").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").addClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png");
  };

  var ninjaZombie = function() {
      $("#user").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#user").addClass("https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png");
      $("#computer").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").addClass("https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
  };

  var zombiePirate = function() {
      $("#user").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#user").addClass("https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").addClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png");
  };

  var zombieNinja = function() {
      $("#user").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#user").addClass("https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").addClass("https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png");
  };

  var piratePirate = function() {
      $("#user").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#user").addClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png");
      $("#computer").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").addClass("https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png");
  };

  var ninjaNinja = function() {
      $("#user").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#user").addClass("https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png");
      $("#computer").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").addClass("https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png");
  };

  var zombieZombie = function() {
      $("#user").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#user").addClass("https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").addClass("https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
  };

  var lizardLizard = function() {
      $("#user").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#user").addClass("fa-hand-lizard-o");
      $("#computer").removeClass("fa-hand-lizard-o https://cdn4.iconfinder.com/data/icons/SIGMA/networking/png/64/piracy.png https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-64.png https://cdn3.iconfinder.com/data/icons/halloween-free-set/512/Halloween-17-64.png");
      $("#computer").addClass("fa-hand-lizard-o");

  };

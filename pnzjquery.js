$('#myActiveGamescoreModal').modal("hide");

$('.choice-btn').on("click", function(gameLogic, userChoice, computerChoice) {

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

}
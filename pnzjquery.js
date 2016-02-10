$('#myActiveGamescoreModal').modal("hide");
  var buttonChoices = ["pirate", "ninja", "zombie"];

$('.choice-btn').on("click", function() {
   var computerChoice = buttonChoices[Math.floor(Math.random() * buttonChoices.length -1) +1]
   var userChoice = this.getAttribute('data-choice');
   console.log("on click, fire fire fire");

      //gameLogic(userChoice, computerChoice);
     //for wins
     if (userChoice === "pirate" && choices[computerChoice] === "ninja")  {
       // pirateNinja ();
       // computerWin();
       console.log("logic fired");
     } else if (userChoice === "pirate" && choices[computerChoice] === "zombie") {
      //pirateZombie ();
      //userWin ();
    } else if (userChoice === "pirate" && choices [computerChoice] === "pirate") {
      //ninjaPirate ();
      //userWin ();
    } else if (userChoice === "ninja" && choices [computerChoice] === "zombie") {
      //ninjaZombie();
      //computerWin();
    } else if (userChoice === "zombie" && choices [computerChoice] === "pirate") {
      //zombiePirate();
      //computerWin();
    } else if (userChoice === "zombie" && choices [computerChoice] === "ninja")  {
      //zombieNinja();
      //userWin();
    } else if (userChoice === "pirate" && choices [computerChoice] === "pirate") {
      //piratePirate();
      //tie();
    } else if (userChoice === "ninja" && choices [computerChoice] === "ninja")  {
      //ninjaNinja();
      //tie();
    } else if (userChoice === "zombie" && choices [computerChoice] === "zombie") {
      //zombieZombie();
      //tie();
    } else {
           //console.log("logic defaulted missing case?");
    }

})       

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
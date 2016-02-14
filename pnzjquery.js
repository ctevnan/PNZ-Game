$('#myActiveGamescoreModal').modal("hide");
  var buttonChoices = ["pirate", "ninja", "zombie"];

$('.choice-btn').on("click", function() {
   var computerChoice = buttonChoices[Math.floor(Math.random() * buttonChoices.length -1) +1]
   var userChoice = this.getAttribute('data-choice');
   console.log("on click, fire fire fire");
   console.log("user: " + userChoice);
   console.log("computer: " + computerChoice);
    
    // gameLogic(userChoice, computerChoice);
     //for wins
     if (userChoice === "pirate" && computerChoice === "ninja")  {
       // pirateNinja ();
       // computerWin();
       console.log("logic fired");
     } else if (userChoice === "pirate" && computerChoice === "zombie") {
      //pirateZombie ();
      //userWin ();
      console.log("logic fired");
    } else if (userChoice === "pirate" && computerChoice === "pirate") {
      //ninjaPirate ();
      //userWin ();
      console.log("logic fired");
    } else if (userChoice === "ninja" && computerChoice === "zombie") {
      //ninjaZombie();
      //computerWin();
      console.log("logic fired");
    } else if (userChoice === "zombie" && computerChoice === "pirate") {
      //zombiePirate();
      //computerWin();
      console.log("logic fired");
    } else if (userChoice === "zombie" && computerChoice === "ninja")  {
      //zombieNinja();
      //userWin();
      console.log("logic fired");
    } else if (userChoice === "pirate" && computerChoice === "pirate") {
      //piratePirate();
      //tie();
      console.log("logic fired");
    } else if (userChoice === "ninja" && computerChoice === "ninja")  {
      //ninjaNinja();
      //tie();
      console.log("logic fired");
    } else if (userChoice === "zombie" && computerChoice === "zombie") {
      //zombieZombie();
      //tie();
      console.log("logic fired");
    } else {
           console.log("logic defaulted missing case?");
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
 
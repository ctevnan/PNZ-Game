$(document).ready(function(){
  //$(window).scroll(function() {
    //$('#object1, #object2').each(function(){
   // var imagePos = $(this).offset().top;

    //var topOfWindow = $(window).scrollTop();
     // if (imagePos < topOfWindow+400) {
      //  $(this).addClass("bigEntrance","slideRight");
    //  }
   // });
 // });

var myWords = ["Pirate", "Ninja", "Zombie"];

  $("#changeWordBtn").on("click", function() {
    var myRandomNumber = Math.floor(Math.random() * myWords.length);
    $("h1").html(myWords[myRandomNumber]);
     // $(this).html(myWords[myRandomNumber]);
     // $(this).fadeOut(1000);
   // });

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

      randomButton();
  });

    randomButton();

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

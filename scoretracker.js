$(document).ready(function () {
  var gameState = {
    userChoice: 0,
    computerChoice: 0,
    userScore: 0,
    computerScore: 0,
    roundCount: 1
  }
  
  $(".btn-info").on("click", function () {
    var tagName = $(this).attr("data-tag");
    gameState[tagName]++;

    $("#" + tagName).html(gameState[tagName]);
  });

});    
window.gamelogic = {
  gameState = {
    userScore: 0,
    computerScore: 0,
    roundCount: 1
  }
}

$(document).ready(function() {

  $(".btn-info").on("click", function() {
    var tagName = $(this).data("tag");
    gamelogic.gameState[tagName]++;

    $("#" + tagName).html(gamelogic.gameState[tagName]);
  });
});    
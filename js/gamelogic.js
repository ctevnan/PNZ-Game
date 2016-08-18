//declare global vars
var playerScore = 0;
var computerScore = 0;
var roundCount = 1;
var clearClasses;
var playerForWins;
var playerGoChoose = '';
var computerGoChoose = '';
var randomIndex = '';
var computerStrings = [
  'rock',
  'paper',
  'scissors'
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
function pnzAnimate() {
  var animationClock = 0;
  //hide scoreboard
  $('.score').fadeIn(250).delay(300);
  $('.roundCount').fadeIn(450).delay(300);
  //funct used in animation sequence to clear fontawesome classes
  function clearClasses() {
    unbindControls();
  $('.animation-container.fa').removeClass('fa-hand-scissors-o').removeClass('fa-hand-rock-o').removeClass('fa-hand-paper-o').removeClass  
  }
}
//800 ms animation
function anim800(rps) {
  clearClasses();
  $('.animation-container.fa').addClass(faIcon);
  $('.animation-container.message').html(rps);
  $('.animation-container.fadeIn').delay(300).fadeOut(250);
}

anim800('rock');
window.setTimeout(function() {
  anim800('paper');
}, animationClock += 900);
window.setTimeout(function(){
  anim800('scissors');
}, animationClock += 900);
window.setTimeout(function() {
  anim1500('fa-thumbs-up-o', 'YOU SHOT: ');
}, animationClock += 900);
window.setTimeout(function() {
  anim1500('fa-hand-' + playerGoChoose + '-o', playerGoChoose);
}, animationClock += 1600);
window.setTimeout(function() {
  anim1500('fa fa-empire', 'EMPIRE-STRIKES-BACK: ');
}, animationClock  += 1600);
window.setTimeout(function() {
  anim1500('fa-hand-' + computerGoChoose + '-o', computerGoChoose);
}, animationClock += 1600);
window.setTimeout(function() {
}, updateScores());
  $('.score').delay(1150).fadeOut(450);
  $('.roundCount').delay(1150).fadeOut(450);
  //end screen
  if(gameState == 'win'){
    anim1500('fa fa-thumbs-up', 'YOU WIN');
  } else if (gameState == 'lose'){
    anim1500('fa fa-empire', 'EMPIRE WINS');
  } else if (gameState == 'tie'){
    anim1500('fa fa-hand-peace-o', 'TIE GAME');
  } animationClock += 1600;
window.setTimeout(function() {
  clearClasses();
  endGame();
},
  $('.animation-container.fa').addClass('fa fa-thumbs-up'));
  $('.animation-container.message').html('ready round' + roundCount);
  $('.animation-container').fadeIn(450).delay(600);
    window.setTimeout(function() {
     $('.roundCount.value').html(roundCount);
      bindControls();
    }), 1150;
  animationClock += 1600;    


function scoreUpdate() {
  $('.player-score .score-value').html(playerScore);
  $('.computer-score .score-value').html(computerScore);
}

function gameLogic() {
  var randomIndex = Math.floor(Math.random() * computerStrings.length);
}
//enemy throw
computerGoChoose = computerStrings[randomIndex];

//tie
if(playerGoChoose == computerGoChoose) {
  gameState = 'tie';
  roundCount += 1;
} else if (theThrow == 'rock') {
  if (enemyThrow == 'scissors') {
    gameState = 'win';
    userScore += 1;
  } else if (enemyThrow == 'paper') {
    gameState = 'lose';
    enemyScore += 1;
  }
  roundCount += 1;
} else if (theThrow == 'scissors') {
  if (enemyThrow == 'rock') {
    gameState = 'lose';
    enemyScore += 1;
  } else if (enemyThrow == 'paper'){
    gameState = 'win';
    userScore += 1;
  }
  roundCount += 1;
} else if (theThrow == 'paper') {
  if(enemyThrow == 'rock') {
    gameState = 'win';
    userScore += 1;
  } else if (enemyThrow == 'scissors'){
    gameState = 'lose';
    enemyScore += 1;
  }
  roundCount += 1;
  }
}

function bindAnim(el){
  $(el).bind('mouseenter', function() {
    $(this).addClass('animate');
  });
  $(el).bind('mouseleave', function() {
    $(this).removeClass('animate');
  });
  $(el).bind('click', function() {
    $(this).removeClass('animate');
  });
}

function unbindAnim(el){
  $(el).removeClass('animate');
  $(el).unbind('mouseenter');
  $(el).unbind('mouseleave');
  $(el).unbind('click');
}
//bind and unbind controls
function bindControls() {
  $('.rock').bind('click', playerGoChoose);
  $('.paper').bind('click', playerGoChoose);
  $('.scissors').bind('click', playerGoChoose);
  bindAnim('.control');
}

function unbindControls() {
  $('.rock').unbind('click', playerGoChoose);
  $('.paper').unbind('click', playerGoChoose);
  $('.scissors').unbind('click', playerGoChoose);
  unbindAnim('.control');
}

//end game
function endGame() {
  if (roundCount > 10) {
    //set score for firebase
  $('#scoreInput').val(userScore);
  if (userScore > enemyScore) {
  $('#winModal').modal('toggle');
    roundCount = 1;
    userScore = 0;
    enemyScore = 0;  
  } else {
    $('#tieModal').modal('toggle');
      roundCount = 1;
      userScore = 0;
      enemyScore = 0;
    }
  }
}

//start game
$('.start').on('click', function() {
  bindControls();
  unbindAnim('.start');
  $('animation-container .fa').addClass('fa-thumbs-up');
  $('animation-container .message').html('ready round ' + roundCount);
  $('animation-container').fadeIn(450).delay(600);
});

//run at startup
bindAnim('.start');
$('.blank-error').hide();

//leaderboard code for firebase
var LEADERBOARD_SIZE = 5;

//create firebase reference
var scoreListRef = new Firebase('https://rockpaperscissors.firebaseio.com');

//keep a mapping of fb locations to html elements to move/remove elements
var htmlForPath = {};

//helper funct to take new score snapshots plus add a row to leaderboard
function handleScoreAdded(scoreSnapshot, previousScoreName) {
  var newScoreRow = $("<tr/>");
  newScoreRow.append($("<td/>").append($("<em/>") {
    text(scoreSnapshot.val().name));
  newScoreRow.append($("<td/>").text(scoreSnapshot.val().score));
}

//store a ref to table row to get it again later
htmlForPath[scoreSnapshot.key()] = newScoreRow;

//put score in appropriate place in the table
if (previousScoreName === null) {
  $("#leaderboardTable").append(newScoreRow);
} else {
  var lowerScoreRow = htmlForPath[previousScoreName];
  lowerScoreRow.before(newScoreRow);
}

//helper funct to handle score obj removal- removes corrasponding table row
function handleScoreRemoved(scoreSnapshot) {
  var removedScoreRow = htmlForPath[scoreSnapshot.key()];
  removedScoreRow.remove();
  delete htmlForPath[scoreSnapshot.key()];
}

//create a view to only recieve callbacks for the last leaderboard_size
var scoreListView = scoreListRef.limitToLast(LEADERBOARD_SIZE);

//add a cb to handle when a new score is added
scoreListView.on('child-added', function (newScoreSnapshot, previousScoreName){
  handleScoreAdded(newScoreSnapshot, previousScoreName);
});

//add a cb to handle when a score is removed
scoreListView.on('child-removed', function (oldScoreSnapshot) {
  handleScoreRemoved(oldScoreSnapshot);
});

//add a cb for when a score changes or moves positions
var changedCallback = function (scoreSnapshot, previousScoreName) {
  handleScoreRemoved(scoreSnapshot);
  handleScoreAdded(scoreSnapshot, previousScoreName);
};
scoreListView.on('.child-removed', changedCallback);
scoreListView.on('.child-changed', changedCallback);  
}

//when the user presses enter on scoreInput, add the score and update the highest score
$("#nameInput").keypress(function(e) {
  if (e.keyCode === 13) {
    if ($("#nameInput").val().trim()!=" "){
      var newScore = Number($("#scoreInput").val());
      var name = $("#nameInput").val();
      $('.blank-error').hide();
      $("#scoreInput").val(" ");

      if(name.length === 0)
      return;
      
      var userScoreRef = scoreListRef.child(name);
      $("#nameInput").val(" ");
      $("#winModal").modal('toggle');

      userScoreRef.setWithPriority({name: name, score: newScore}, newScore);
    } else {
      $(".blank-error").fadeIn();
    }    
  }
});
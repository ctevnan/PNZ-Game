$(document).ready(function() {
  var randomWords = ["Pirate", "Ninja", "Zombie"];

 $("#changeWordBtn").on("click", function() {
    var randomNumber = Math.floor(Math.random() * randomWords.length);
   $("h1").fadeIn(250, function() {
     $(this).html(randomWords[randomNumber]);
     $(this).fadeOut(1000);
    });
  });
});
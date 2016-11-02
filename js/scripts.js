function Player(name){
  this.name = name;
  this.currentScore = 0;
  this.totalScore = 0;
};

function Game(player){
  this.pigGame = [];
  this.dieValue = 1;
};

Game.prototype.roll = function() {
  return Math.floor(Math.random() * (7 - 1)) + 1;
};

Game.prototype.gamePlay = function() {
  var x = 0;
  while(this.dieValue > 1 || this.dieValue != "hold"){
    //do stuff
  }
};

var newGame = new Game();

$(document).ready(function() {
  $("form#player").submit(function(event){
    var name = $("#player-entry").val();
    var newPlayer = new Player(name);

    newGame.pigGame.push(newPlayer);
    $(".show-player-name").append(name + "<br>");
    event.preventDefault();
  });

  $("form#game").submit(function(event){

    $("#hold").click(function(){
      newGame.dieValue = "hold";
    });
    newGame.dieValue = newGame.roll();
    $("#display h3").text(newGame.roll());
    event.preventDefault();
  });
})

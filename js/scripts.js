function Player(name){
  this.name = name;
  this.currentScore = 0;
  this.totalScore = 0;
}

function Game(player){
  this.pigGame = [];
}

var newGame = new Game();

$(document).ready(function() {
  $("form#player").submit(function(event){
    event.preventDefault();
    var name = $("#player-entry").val();
    var newPlayer = new Player(name);

    newGame.pigGame.push(newPlayer);
  });
})

function Player(name){
  this.name = name;
  this.currentScore = 0;
  this.totalScore = 0;
};

function Game(player){
  this.pigGame = [];
  this.dieValue = 0;
  this.index = 0;
};

Game.prototype.roll = function() {
  return Math.floor(Math.random() * (7 - 1)) + 2;
};

Game.prototype.gamePlay = function() {

  if(this.dieValue === 1){
    this.pigGame[this.index].currentScore = 0;
    if (this.index === this.pigGame.length - 1) {
      this.index = 0;
    }
    else{
        this.index += 1;
    }
  }
  else if(this.dieValue === 10){
    this.pigGame[this.index].totalScore += this.pigGame[this.index].currentScore
    console.log("this is my total score: " + this.pigGame[this.index].totalScore);
    this.pigGame[this.index].currentScore = 0;
    if (this.index === this.pigGame.length - 1) {
      this.index = 0;
    }
    else{
        this.index += 1;
    }
  }
  else{
    this.pigGame[this.index].currentScore += this.dieValue;
    console.log("this is my current score: " + this.pigGame[this.index].currentScore)
  }
};

var newGame = new Game();

$(document).ready(function() {
  $("form#player").submit(function(event){
    var name = $("#player-entry").val();
    var newPlayer = new Player(name);

    newGame.pigGame.push(newPlayer);
    console.log(newGame.pigGame);
    $("#player-entry").text("");
    $(".show-player-name").append(name + "<br>");
    event.preventDefault();
  });

  $("form#game").submit(function(event){

    newGame.dieValue = newGame.roll();
    newGame.gamePlay();
    //console.log(newGame.dieValue)
    $("#display h3").text(newGame.dieValue);
    event.preventDefault();
  });

  $("form#hold").submit(function(event){
    newGame.dieValue = 10;
    newGame.gamePlay();
    event.preventDefault();
  });
})

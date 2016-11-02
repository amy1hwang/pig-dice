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
  return Math.floor(Math.random() * (7 - 1)) + 1;
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
  }
};

Game.prototype.gameCheck = function(){
  for(var i = 0; i < this.pigGame.length; i++){
    if(this.pigGame[i].totalScore >= 20){
        return false;
    }
    else{
      return true;
    }
  }
}


var newGame = new Game();

$(document).ready(function() {
  $("form#player").submit(function(event){
    var name = $("#player-entry").val();
    var newPlayer = new Player(name);

    newGame.pigGame.push(newPlayer);
    $("#player-entry").val("");
    $(".show-player-name h4").append(name + " score:" + "<br>" + "<br>");

    event.preventDefault();
  });

  $("form#game").submit(function(event){

    newGame.dieValue = newGame.roll();
    var check = newGame.gameCheck();
    console.log(check);
    if(check){
      newGame.gamePlay();
    }
    else{
      console.log("Winner")
    }

    $("#display h3").text(newGame.dieValue);
    $(".current-player").text(newGame.pigGame.name)
    event.preventDefault();
  });

  $("form#hold").submit(function(event){
    newGame.dieValue = 10;
    var check = newGame.gameCheck();
    if(check){
      newGame.gamePlay();
    }
    else{
      console.log("Winner")
    }
    event.preventDefault();
  });
})

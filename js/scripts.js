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
  var score;
  var name = this.pigGame[this.index].name;

  if(this.dieValue === 1){
    this.pigGame[this.index].currentScore = 0;
    score = this.pigGame[this.index].totalScore += this.pigGame[this.index].currentScore
    if (this.index === this.pigGame.length - 1) {
      this.index = 0;
    }
    else{
      this.index += 1;
    }
    return name + "'s total score: "  + score;
  }
  else if(this.dieValue === 10){
    score = this.pigGame[this.index].totalScore += this.pigGame[this.index].currentScore
    this.pigGame[this.index].currentScore = 0;
    if (this.index === this.pigGame.length - 1) {
      this.index = 0;
    }
    else{
      this.index += 1;
    };
    return name + "'s total score: "  + score;
  }
  else{
    var current = this.pigGame[this.index].currentScore += this.dieValue;
    return name + "'s current score: "  + current;
  };
};

Game.prototype.gameCheck = function(){
  //for(var i = 0; i < this.pigGame.length; i++){
  if(this.pigGame[this.index].totalScore >= 20){
      return false;
  }
  else{
    return true;
    }
  //}
}


var newGame = new Game();

$(document).ready(function() {
  $("form#player").submit(function(event){
    var name = $("#player-entry").val();
    var newPlayer = new Player(name);

    $(".welcome-message").text("Welcome " + name + ". Are you ready to play?")
    $(".welcome").fadeIn(3000);
    $(".welcome").fadeOut(1000);
    newGame.pigGame.push(newPlayer);
    $("#player-entry").val("");

    event.preventDefault();
  });

  $("form#game").submit(function(event){

    newGame.dieValue = newGame.roll();
    var check = newGame.gameCheck();
    var output;

    if(check){
      output = newGame.gamePlay();
    }
    else{
      console.log("Winner")
    }
    $("#display h3").text(newGame.dieValue);
    $("img.headshot").fadeIn(300);
    $(".score-display").text(output);

    event.preventDefault();
  });

  $("form#hold").submit(function(event){
    newGame.dieValue = 10;
    var check = newGame.gameCheck();
    var output;
    var win;
    if(check){
      output = newGame.gamePlay();
    }
    else {
      win = "YOU WIN!"
    }

    $("img.headshot").show();
    $(".score-display").text(output);

    event.preventDefault();
  });
})

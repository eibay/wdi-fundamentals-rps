////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';
// DEBUGGING: Use Google Chrome browser and select VIEW -> DEVELOPER -> JAVASCRIPT CONSOLE
//            Select SOURCES from tab then TOGGLE breakpoints beside LINE NOS.
// window.alert("Javascript is Alive!"); // to test if call is successful!


// POP-UP MESSAGE
//function popMessage {
//  window.open('popMessage.html','Rock-Paper-Scissors Game','height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
                       
//}


// START OF ROCK, PAPER, SCISSORS PROGRAM 
var playerInput;
function getInput() {
    //popMessage();
    window.alert("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt("Please type: rock, paper or scissors");
}
//playerInput = getInput();
//window.alert("Player move: " + playerInput);

var machineInput;
function randomPlay() {
    var randomNumber = Math.random();
    //window.alert("Random Number: " + randomNumber);
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
//machineInput = randomPlay();
//window.alert("Machine move: " + machineInput);

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var value;
    if (move == null) {
        value = getInput();
    } else {
        value = move;
    }
    return value;
}
//var playerMove;
//playerMove = getPlayerMove(playerInput);
//window.alert("Player move: " + playerMove);

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var value;
    if (move == null) {
       value = randomPlay();
    }else {
       value = move;
    }
    return value;
}
//var computerMove;
//computerMove = getComputerMove(machineInput);
//window.alert("Machine move: " + computerMove);

function getWinner(playerMove,computerMove) {
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    var winner;
    if ((playerMove === "scissors") && (computerMove === "paper")) {
        winner = 'player';

    }else if ((playerMove === "paper") && (computerMove === "rock")) {
        winner = 'player';

    }else if ((playerMove === "rock") && (computerMove === "scissors")) {
        winner = 'player';

    }else if ((computerMove === "scissors") && (playerMove === "paper")) {
        winner = 'computer';

    }else if ((computerMove === "paper") && (playerMove === "rock")){
        winner = 'computer';

    }else if ((computerMove === "rock") && (playerMove === "scissors")) {
        winner = 'computer';

    }else {
        winner = 'draw';
    }
    return winner;
}
//var wins;
//wins = getWinner(playerMove, computerMove);
//window.alert("Match Winner: " + wins);


function playToFive() {
  window.alert('Let\'s play Rock Paper Scissors');
  //positionedPopup("Let\'s play Rock Paper Scissors",'700','300','100','200');

  var playerWins = 0;
  var computerWins = 0;
  var draw = 0;
  var computerMove;
  var playerMove;
  var wins;

  // This function should continue to play Rock Paper Scissors until either the
  // player or the computer has won five times.
  // After each 'round', display some text in the console indicating who played
  // what, who won, and what the current scoreboard looks like.
  // For example,
  //  console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  //  console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
  

  while (((playerWins >= 3) || (computerWins >= 3)) === false) {
      
    playerInput = getInput();

    playerMove = getPlayerMove(playerInput);  
  
    computerMove = getComputerMove(machineInput);

    //window.alert('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
    
    wins = getWinner(playerMove, computerMove);
    
    if (wins === "player"){
        playerWins += 1;
      }else if (wins === "computer") {
        computerWins += 1;
      }else {
        draw += 1;
      }
    window.alert("SCOREBOARD: " + "Player: " + playerWins + "; Computer: " + computerWins
                   + "; Draw: " + draw );
  }

  return [playerWins, computerWins, draw];
}

var result = [0, 0, 0];
result = playToFive();
if (result[0] > result[1]){
  window.alert("FINAL SCORE : " + " Player: " + result[0] + "; Computer: " +
                result[1] + "; Draw: " + result[2] +  "\n\n\t\t CONGRATULATIONS! YOU WIN!");
}else {
  window.alert("FINAL SCORE : " + " Player: " + result[0] + "; Computer: " + 
                result[1] + "; Draw: " + result[2] +  "\n\n\t\t YOU LOOSE! SORRY, COMPUTER WINS!");
}

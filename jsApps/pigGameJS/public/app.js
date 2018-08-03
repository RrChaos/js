/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

//VARIABLES
var scores, roundScore, activePlayer, gamePlaying;
init();

document.querySelector('.btn-roll').addEventListener('click', function() {
   if(gamePlaying){
      //1. Random number (Global within subroutine)
     var dice = Math.floor(Math.random()*6) + 1;
      //2. Display the result
     let diceDom = document.querySelector('.dice');
     diceDom.src = 'images/dice-' + dice + '.png';
      //3. Update the round score If the rolled number was NOT 1.
      if(dice !== 1){
        //Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
      }else {
      //scores[activePlayer]= 0;
      //next Player turn
         nextPlayer();
    }
  }
});
//FUNCTION EVENT LISTENER ENDS


//HOLD button
document.querySelector('.btn-hold').addEventListener('click', function() {
  if(gamePlaying){
  //Save scorte to global player score
scores[activePlayer] += roundScore;
  //Update UI
document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
  // Check if Player Won the game
  if (scores[activePlayer] >= 40) {   document.querySelector('#name-' + activePlayer).textContent = 'Winner!!' ;
document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
  document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
  gamePlaying = false;
} else {
  //next Player
  nextPlayer();
}
}
});

//Nex PLayer function as to avoid DRY principle
function nextPlayer() {
  //Next Player
  activePlayer  ===   0  ?  activePlayer  =  1  : activePlayer   =  0;
  //Set roundScore to begin on 0 for player
  roundScore = 0;
  //Display also 0 on User interface
  document.querySelector('#current-0').textContent = '0';
  document.querySelector('#current-1').textContent = '0';
  //Remove & adding 'active' class for styles to be applied
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
 document.getElementById('current-1').textContent = '0';
 document.getElementById('name-0').textContent = 'Player 1';
 document.getElementById('name-1').textContent = 'Player 2';
 document.querySelector('.player-0-panel').classList.remove('active');
 document.querySelector('.player-1-panel').classList.remove('active');
 document.querySelector('.player-1-panel').classList.remove('winner');
 document.querySelector('.player-1-panel').classList.remove('winner');
 document.querySelector('.player-0-panel').classList.add('active');
}


//GAME FISNISHED
 var score ,roundScore , activePlayer, gamePlaying;

init();

var lastDice ; 

document.querySelector(".btn-roll").addEventListener('click',function(){

    if (gamePlaying){
            //random number
        dice = Math.floor(Math.random()*6) + 1;

        //DIsplay  the Result
        var diceDom = document.querySelector(".dice");
        diceDom.style.display = 'block';
        diceDom.src = 'dice-'+ dice  +'.png';

        //update the round Score if the rolled number was not a 1 and when we don't get two consecutive six
        if(dice === 6 && lastDice === 6 ){
            roundScore[activePlayer]= 0 ;
            document.querySelector("#score-"+ activePlayer).textContent = '0';
            nextPlayer();
        }
        else if(dice !==1){
            roundScore += dice;
            //roundScore = roundScore+dice;
            document.querySelector("#current-"+ activePlayer).textContent = roundScore;
            
        }else{
            // Next Player
        nextPlayer(); 
        }

        lastDice = dice;
    }  
});

document.querySelector('.btn-hold').addEventListener('click', function(){
     if(gamePlaying){
            // Add current score to Global score
        score[activePlayer] += roundScore;
            

        // Update the UI
        document.querySelector('#score-'+ activePlayer).textContent = score[activePlayer];
        

        // Check if player Won the Game
        if(score[activePlayer] >= 10){
            document.querySelector("#name-" + activePlayer).textContent= 'Winner!';
            document.querySelector(".dice").style.display = 'none';
            document.querySelector(".player-"+ activePlayer + "-panel").classList.add("winner");
            document.querySelector(".player-"+ activePlayer + "-panel").classList.remove("active");
            gamePlaying = false; 
        }else{
            nextPlayer();
        } 
    }
   
    
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;  // ternary operator
    roundScore = 0;

    document.querySelector(".player-0-panel").classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector(".btn-new").addEventListener('click', init);

function init(){
    score = [0,0];
    roundScore = 0; 
    activePlayer = 0;
    gamePlaying = true;

    document.querySelector(".dice").style.display = 'none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector("#name-" + activePlayer).textContent= 'player 1';
    document.querySelector(".player-0-panel").classList.remove("winner");
    document.querySelector(".player-1-panel").classList.remove("winner");
    document.querySelector(".player-0-panel").classList.remove("active");
    document.querySelector(".player-1-panel").classList.remove("active");
    document.querySelector(".player-0-panel").classList.add("active");
}




























//document.querySelector("#current-" + activePlayer).innerHTML = '<em>'+dice+'</em>'; 
// 

//var x = document.querySelector("#score-0").textContent;
//console.log(x);    
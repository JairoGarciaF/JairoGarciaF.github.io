var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var level = 0;


$(document).keypress(function(){
    if (gamePattern.length == 0){
        nextSequence();
        
    }
});	
console.log(gamePattern);
console.log(userClickedPattern);

$('.btn').click(eventHandler);

function checkAnswer(currentLevel){
    
    if (userClickedPattern[currentLevel] !== gamePattern[currentLevel]) {
        playSound('wrong');
        $('body').addClass('game-over');
        $('#level-title').text('Game Over, Press Any Key to Restart');
        setTimeout(function () {
            $('body').removeClass('game-over');
        }, 200);
        startOver();
    }else if (userClickedPattern.length === gamePattern.length){	
        setTimeout(function(){
            nextSequence();
            userClickedPattern = [];
        }, 1000);
    }             
}

function startOver(){
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}

function eventHandler () {
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
  }


function nextSequence(){
    level++;
    $('#level-title').text('Level ' + level);	
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    setTimeout(function(){
        $('#'+randomChosenColor).fadeOut(70).fadeIn(70);
        playSound(randomChosenColor);
    }, 1000);
}

function playSound(name){
    var sound = new Audio('sounds/'+name+'.mp3');
    sound.play();
}

function animatePress(currentColor){
    $('#'+currentColor).addClass('pressed');
    setTimeout(function(){
        $('#'+currentColor).removeClass('pressed');
    },100);
}   


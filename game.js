const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

// Setting the next pattern
function nextSequence(){
    // Reset user clicked pattern
    userClickedPattern = [];

    // Choosing random color
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    
    // Saving the random colors for this game
    gamePattern.push(randomChosenColour);

    // Adding sound and animate to the choosen button
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    // Changing the title for each level
    $('#level-title').text('level ' + ++level);
    started = true;
}

// Adding the user clicked pattern to an array
$(".btn").click(function(){
    // Recognize the clicked button
    var userChosenColour = $(this).attr("id");

    // Saving the pattern
    userClickedPattern.push(userChosenColour);

    // Adding sound and animate to the clicked button
    animatePress(userChosenColour);
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

// Playing sound to each button
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Flashing the choosen button 
function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
}

// Detecting if key has been pressed
$(document).keypress(function (event) {
    
    let key = (event.keyCode ? event.keyCode : event.which);
    let character = String.fromCharCode(key)
    if(!started){        
            nextSequence();  
    }       
});

// Checking user pattern
function checkAnswer(currentLevel){

    if(gamePattern.length == userClickedPattern.length)
    {
        if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
        {
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }

        // User lose
        else{
        $('body').addClass("game-over");
        playSound("wrong");
        setTimeout(function () {
            $('body').removeClass("game-over");
          }, 200);
          $('#level-title').text('Game Over, Press Any Key to Restart');
          
          startOver();
        }
    }    
}

// Reset the game for new one
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
const buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

// Setting the next pattern
function nextSequence(){
    // Reset user clicked pattern
    userClickedPattern = [];

    // Choosing random color
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    
    // Saving the random colors for this game
    gamePattern.push(randomChosenColour);

    // Adding sound and animate to the choosen button
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    // Changing the title for each level
    $('#level-title').text('level ' + ++level);
    started = true;
}

// Adding the user clicked pattern to an array
$(".btn").click(function(){
    // Recognize the clicked button
    var userChosenColour = $(this).attr("id");

    // Saving the pattern
    userClickedPattern.push(userChosenColour);

    // Adding sound and animate to the clicked button
    animatePress(userChosenColour);
    playSound(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});

// Playing sound to each button
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// Flashing the choosen button 
function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
}

// Detecting if key has been pressed
$(document).keypress(function (event) {
    
    let key = (event.keyCode ? event.keyCode : event.which);
    let character = String.fromCharCode(key)
    if(!started){        
            nextSequence();  
    }       
});

// Checking user pattern
function checkAnswer(currentLevel){

    if(gamePattern.length == userClickedPattern.length)
    {
        if(gamePattern[currentLevel] === userClickedPattern[currentLevel])
        {
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }

        // User lose
        else{
        $('body').addClass("game-over");
        playSound("wrong");
        setTimeout(function () {
            $('body').removeClass("game-over");
          }, 200);
          $('#level-title').text('Game Over, Press Any Key to Restart');
          
          startOver();
        }
    }    
}

// Reset the game for new one
function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}
var buttons = document.querySelectorAll(".drum");

buttons.forEach(button => {
    button.addEventListener("click", function(){        
        handleEvent(this.innerHTML); 
        buttonAnimation(this.innerHTML);  
    });   
});

document.addEventListener("keydown", function(event) {
    handleEvent(event.key);
    buttonAnimation(event.key);
});

function handleEvent(key) {
    
    switch (key) {
        case "w":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "a":	
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "s":	
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "d":	
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "j":	
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":	
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":	
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log(key);
            break;
    }     
}

function buttonAnimation (currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
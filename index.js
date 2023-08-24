//document.querySelector("button").addEventListener("click", onClick);


for(var i = 0; i< document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){   
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
    
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var tom = new Audio('./sounds/crash.mp3');
            tom.play();
            break;
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;    
        case "s":
            var tom3 = new Audio('./sounds/snare.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var crash = new Audio('./sounds/tom-1.mp3');
            crash.play();
            break;
        case "k":
            var kickB = new Audio('./sounds/kick-bass.mp3');
            kickB.play();
            break;
        case "l":
            var snare = new Audio('./sounds/tom-3.mp3');
            snare.play();
            break;

    
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 200)
}


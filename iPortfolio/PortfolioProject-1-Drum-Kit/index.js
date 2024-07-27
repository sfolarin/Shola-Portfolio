var length = document.querySelectorAll(".btn").length
for (i=0; i<length; i++)
document.querySelectorAll(".btn")[i].addEventListener("click", buttonClicked)

function buttonClicked(){
        var innerButton = this.innerHTML
        makeSound(innerButton)
        makeAnimation(innerButton)
    
}

document.addEventListener("keypress", keyBoard)

function keyBoard(event){
    makeSound(event.key)
    makeAnimation(event.key)
    
}


function makeSound(key){

    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();   
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();   
            break;
     
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();   
            break;
               
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();   
            break;
    
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();   
            break;
    
        case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();   
            break;
    
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();   
            break;
                   
                   
        default: console.log(innerButton)
            break;
    }
}


function makeAnimation(currentKey){
    var Animation = document.querySelector("."+currentKey)
    Animation.classList.add("pressed")
    setTimeout(function(){Animation.classList.remove("pressed")}, 100)

}




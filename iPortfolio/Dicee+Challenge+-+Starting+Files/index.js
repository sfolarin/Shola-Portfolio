var randomNumber1 = Math.floor(Math.random()*6) + 1

var varImages1 = "images/dice" + randomNumber1 + ".png"


var image1 = document.querySelectorAll("img")[0]

image1.setAttribute("src", varImages1)

/* Line 2 */


var randomNumber2 = Math.floor(Math.random()*6) + 1

var varImages2 = "images/dice" + randomNumber2 + ".png"


var image2 = document.querySelectorAll("img")[1]

image2.setAttribute("src", varImages2)

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🏆 Player 1 wins"
}

else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "🏆 Player 2 wins"
}

else {
    document.querySelector("h1").innerHTML = "🏆 No winner, Kindly rematch"
}

var player1 = Math.ceil(Math.random()*6);
var player2 = Math.ceil(Math.random()*6);

document.querySelector(".img1").setAttribute("src", "images/dice" + player1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + player2 + ".png");

document.querySelector("h1").innerHTML = (player1 > player2) ? "Player 1 Wins!" : (player1 < player2) ? "Player 2 Wins!" : "Draw!";
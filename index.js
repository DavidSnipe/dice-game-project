var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

switch (randomNumber1) {
    case 1:
        document.querySelector(".img1").setAttribute("src", "images/dice1.svg");
        break;
    case 2:
        document.querySelector(".img1").setAttribute("src", "images/dice2.svg");
        break;
    case 3:
        document.querySelector(".img1").setAttribute("src", "images/dice3.svg");
        break;
    case 4:
        document.querySelector(".img1").setAttribute("src", "images/dice4.svg");
        break;
    case 5:
        document.querySelector(".img1").setAttribute("src", "images/dice5.svg");
        break;
    case 6:
        document.querySelector(".img1").setAttribute("src", "images/dice6.svg");
        break;
  }


  switch (randomNumber2) {
    case 1:
        document.querySelector(".img2").setAttribute("src", "images/dice1.svg");
        break;
    case 2:
        document.querySelector(".img2").setAttribute("src", "images/dice2.svg");
        break;
    case 3:
        document.querySelector(".img2").setAttribute("src", "images/dice3.svg");
        break;
    case 4:
        document.querySelector(".img2").setAttribute("src", "images/dice4.svg");
        break;
    case 5:
        document.querySelector(".img2").setAttribute("src", "images/dice5.svg");
        break;
    case 6:
        document.querySelector(".img2").setAttribute("src", "images/dice6.svg");
        break;
  }

    if (randomNumber1 > randomNumber2){
        document.querySelector(".title").textContent = "🚩Player 1 Wins";
    }

    if (randomNumber1 < randomNumber2){
        document.querySelector(".title").textContent = "🚩Player 2 Wins";
    }

    if (randomNumber1 == randomNumber2){
        document.querySelector(".title").textContent = "Draw";
    }
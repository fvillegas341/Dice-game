const winnerDisplay = document.querySelector("h1");

//Create a random number variable for img1
const randomNumber1 = Math.floor(Math.random() * 6) + 1;

const randomImage1 = `dice${randomNumber1}.png`;

const image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImage1);

//Create a random number variable for img2
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const randomImage2 = `dice${randomNumber2}.png`;

const image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImage2);



if (randomNumber1 > randomNumber2) {
  winnerDisplay.innerHTML = "Player 1 is the winner";
} else if (randomNumber1 < randomNumber2) {
  winnerDisplay.innerHTML = "Player 2 is the winner";
} else {
  winnerDisplay.innerHTML = "Draw";
};

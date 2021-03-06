// An instance that will hold all of the information of our game
const game = new Game();

// DOM manipulations
// to 'grab' starting page & start button
const startingPage = document.querySelector(".startingPage");
const startButton = document.querySelector(".startButton");
// const tryAgainButton = document.querySelector(".tryAgainButtonLost");

// connect start button with game canvas
startButton.addEventListener("click", function (event) {
  startingPage.style.display = "none";
  game.isRunning = true;
  gameMusic.play();
});

// preload all extra assets
function preload() {
  bgImage = loadImage("./assets/farmBackground.png");
  player = loadImage("./assets/dwightPlayer.png");
  beetAward = loadImage("./assets/beetAward.png");
  jimObstacle = loadImage("./assets/jimObstacle.png");

  wonGameImg = loadImage("./assets/winGame2.jpeg");
  lostGameImg = loadImage("./assets/lostGame.jpg");
  gameMusic = loadSound("./assets/The Office.mp3");
}

// gets called 60x a second
function draw() {
  if (game.isRunning === false) {
    return;
  }
  clear();
  game.draw();
}

// sets up the canvas
function setup() {
  createCanvas(WIDTH, HEIGHT);
  game.setup();
}

// checks for whenever we press a key
function keyPressed() {
  game.keyPressed();
}

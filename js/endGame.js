// contains info of wonGame page
class WonGame {
  constructor() {}
  draw() {
    console.log("STAAAAAAPH!");
    background(0);
    textSize(60);
    fill(153, 51, 153);
    text("YOU WON", 550, 100);
    textSize(25);
    fill(250);
    text("Your score is amazing, Übermensch!", 650, 160);
    image(wonGameImg, 480, 250, 500, 400);
  }
}

// contains info of lostGame page
class LostGame {
  constructor() {}
  draw(obstacles) {
    clear();
    background(0);
    textSize(60);
    fill(255, 255, 255);
    text("YOU LOST. FACT!", 450, 100);
    image(lostGameImg, 480, 250, 500, 400);
  }
}

// contains info of wonGame page
class WonGame {
  constructor() {}
  draw() {
    background(0);
    textSize(60);
    fill(255, 255, 255);
    text("YOU WON!", 600, 100);
    textSize(30);
    fill(250);
    text("Your score is amazing, Übermensch!", 470, 160);
    image(wonGameImg, 480, 250, 500, 500);
  }
}

// contains info of lostGame page
class LostGame {
  constructor() {}
  draw() {
    clear();
    background(0);
    textSize(60);
    fill(255, 255, 255);
    text("YOU LOST. FACT!", 450, 100);
    image(lostGameImg, 480, 250, 500, 400);
  }
}

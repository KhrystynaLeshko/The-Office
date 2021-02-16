class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.obstacles = [];
    this.awards = [];
    this.isRunning = false;
    this.gameMusic = gameMusic;
  }

  setup() {
    this.background.setup();
  }

  keyPressed() {
    this.player.keyPressed();
  }

  draw() {
    this.background.draw();
    this.player.draw();
  }
}

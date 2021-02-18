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

    // frameCount is always counting + 1 on every loop of the function draw
    // if base is 60frames/second. 👇 means every 1,5s(90 frames = 1.5seconds) push / create a new obstacle on the array

    // for AWARDS
    if (frameCount % 90 === 0) {
      this.awards.push(new Award());
    }

    // array of awards. for every single award in the array we will:
    this.awards.forEach((award, index) => {
      award.draw();

      if (award.x <= -award.width) {
        this.awards.splice(index, 1);
      }
    });

    //FOR OBSTACLES
    if (frameCount % 90 === 0) {
      this.obstacles.push(new Obstacle());
    }
    // array of obstacles. for every single obstacle in the array we will:
    this.obstacles.forEach((obstacle, index) => {
      // draw it
      obstacle.draw();

      // // check if it is coliding with the player
      // if (this.collisionCheck(this.player, obstacle)) {
      //   // its out choice we can do what we want to:
      //   // end game, add levels, remove lives, etc
      //   console.log("WATCH OUT FOR THE THINGY");
      // }
      // remove the obstacle if its totally off canvas
      if (obstacle.x <= -obstacle.width) {
        this.obstacles.splice(index, 1);
      }
    });
  }
}

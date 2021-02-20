class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.obstacles = [];
    this.awards = [];
    this.points = 0;
    this.isRunning = false;
    this.gameMusic = gameMusic;

    // end game scenarios
    this.wonGame = new WonGame();
    this.lostGame = new LostGame();
    this.endGame = false;
  }

  setup() {
    this.background.setup();
  }

  keyPressed() {
    this.player.keyPressed();
  }

  draw() {
    if (this.endGame) {
      return this.toby();
    }

    this.background.draw();
    this.player.draw();

    // draw point on background
    image(beetAward, 100, 75, 40, 40);
    textSize(30);
    textStyle(BOLD);
    fill(219, 66, 86);
    text(`${this.points}`, 150, 110);

    // frameCount is always counting + 1 on every loop of the function draw
    // if base is 60frames/second. 👇 means every 1,5s(90 frames = 1.5seconds) push / create a new obstacle on the array

    // for AWARDS
    if (frameCount % 90 === 0) {
      this.awards.push(new Award());
    }

    // array of awards. for every single award in the array we will:
    this.awards.forEach((award, index) => {
      award.draw();
      // remove the award if its totally off canvas
      if (award.x <= -award.width) {
        this.awards.splice(index, 1);
      }
      // check if it is coliding with the player
      if (this.collisionCheck(this.player, award)) {
        this.points += 1;
        award.y = -200;

        if (this.points >= 1) {
          clear();
          this.wonGame.draw();
          noLoop();
          gameMusic.stop();
        }
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

      // remove the obstacle if its totally off canvas
      if (obstacle.x <= -obstacle.width) {
        this.obstacles.splice(index, 1);
      }

      // check if it is coliding with the player
      if (this.collisionCheck(this.player, obstacle)) {
        // its out choice we can do what we want to:
        // end game, add levels, remove lives, etc
        console.log("WATCH OUT FOR THE ENEMY");
        this.endGame = true;
      }
    });
  }

  // calling lostGame page
  toby() {
    noLoop();
    console.log("STAAAAAAPH!");
    this.lostGame.draw();
    gameMusic.stop();
  }

  // calling won game

  // angela() {
  //   if (this.points >= 2) {
  //     clear();
  //     this.wonGame.draw();
  //     noLoop();
  //   }
  // }

  // checking if there is a collision between a player and an obstacle
  collisionCheck(player, obstacle) {
    const playerTopArea = player.y;
    const playerLeftArea = player.x;
    const playerRightArea = player.x + player.width;
    const playerBottomArea = player.y + player.height;

    const obsTopArea = obstacle.y;
    const obsLeftArea = obstacle.x;
    const obsRightArea = obstacle.x + obstacle.width;
    const obsBottomArea = obstacle.y + obstacle.height;
    const isTouchingOnLeft = obsRightArea > playerLeftArea;
    const isTouchingOnBottom = obsTopArea < playerBottomArea;
    const isTouchingOnRight = obsLeftArea < playerRightArea;
    const isTouchingOnTop = obsBottomArea > playerTopArea;

    return (
      isTouchingOnRight &&
      isTouchingOnTop &&
      isTouchingOnBottom &&
      isTouchingOnLeft
      // obstacle.x < player.x + player.width &&
      // obstacle.y + obstacle.height >player.y &&
      // obstacle.y < player.y + player.height &&
      // obstacle.x + obstacle.width > player.x
    );
  }
}

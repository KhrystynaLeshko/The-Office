class Player {
  constructor() {
    this.x = 50;
    this.y = 0;
    this.width = 150;
    this.height = 150;
    this.floor = 620;
    this.velocity = 0;
    this.jumpCount = 0;
  }

  // this function is called from the game and it checks if we are pressing the SPACE bar
  keyPressed() {
    if (keyCode === 32) {
      this.jump();
    }
  }

  // if the jumpCount is 2 (the user has done a double jump) we do nothing
  // otherwise increase the jumpCount, we remove y so that the player goes up, and we remove some velocity so that we have a little of resistance going up and an ever growing velocity when we're crashing down
  jump() {
    if (this.jumpCount === 2) {
      return;
    }
    this.jumpCount++;
    this.y -= 80;
    this.velocity -= 7;
  }

  draw() {
    // increase the velocity according to how long the player has been flying
    this.velocity += GRAVITY;

    // if the user is in the air, pull the user closer down
    this.y += this.velocity;

    // if the user is trying to go below the floor, say heeeeeelll noooo
    if (this.y >= this.floor) {
      this.y = this.floor;
      // reset velocity
      this.velocity = 0;
      // reset jumpCount
      this.jumpCount = 0;
    }
    image(player, this.x, this.y, this.width, this.height);
  }
}

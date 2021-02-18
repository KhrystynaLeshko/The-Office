// Each obstacle will be held inside the Game class.
// y value  defined randomly at the monent of their creation
class Obstacle {
  constructor() {
    this.x = WIDTH;
    this.width = 100;
    this.height = 100;
    this.y = random(0, HEIGHT);
  }

  // every frame it moves the obstacle to the left (4 pixels)
  draw() {
    this.x -= 4;
    image(jimObstacle, this.x, this.y, this.width, this.height);
    //  rect (this.x, /* this.y */, /* this.width*/ , /*this.height */)
  }
}

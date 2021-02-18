// Each award will be held inside the Game class.
// y value  defined randomly at the monent of their creation
class Award {
  constructor() {
    this.x = WIDTH;
    this.width = 80;
    this.height = 80;
    this.y = random(0, HEIGHT);
  }

  // every frame it moves the award to the left (4 pixels)
  draw() {
    this.x -= 4;
    image(beetAward, this.x, this.y, this.width, this.height);
    //  rect (this.x, /* this.y */, /* this.width*/ , /*this.height */)
  }
}

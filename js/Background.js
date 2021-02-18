// This class will hold the logic and the implementation of an inifinte rolling background
class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = WIDTH;
    this.height = HEIGHT;
  }
  setup() {
    this.width = WIDTH;
    this.height = HEIGHT;
  }
  draw() {
    // every frame it takes 3 pixes and moves the image to the left
    this.x -= 4;
    // FIRST IMAGE being drawn: starts at 0 and it goes all the way out of canvas
    image(bgImage, this.x, this.y, this.width, this.height);
    // SECOND IMAGE - STARTS AT THE END OF THE FIRST ONE
    // second image: starts outside of the canvas and eventually is fully shown
    image(bgImage, this.x + this.width, this.y, this.width, this.height);

    // the great reseter of canvases
    // first of its name, send of the kingdom
    if (this.x <= -this.width) {
      this.x = 0;
    }
  }
}

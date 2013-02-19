/* @pjs preload="/gshow/pics/le_goulag_32pxH.png"; */

PImage logo;
int posX = 32;
int posY = 2;

void setup() {
    size(32,32);
    logo = loadImage("/gshow/pics/le_goulag_32pxH.png");
    frameRate(20);
    background(0);
    println("width " + logo.width + " height: " + logo.height);
}

void draw() {
    background(0);
    image(logo, posX,posY);
    posX--;
    if(posX+logo.width < 0) {
        posX = 33;
    }
}

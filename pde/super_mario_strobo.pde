/* @pjs preload="/gshow/pics/mario_jump.png" */

PImage mario;
void setup() {
    size(32,32);

    mario_jump = loadImage("/gshow/pics/mario_jump.png");
}

bool i = false;
void draw(){
  background(0);
  //background(i ? 0 : 255);
  i = !i;

  image(mario_jump, 0, 0);
}

function drawMario(){
}

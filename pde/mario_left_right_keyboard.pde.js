/* @pjs preload="/gshow/pics/mario_jump_left.png" */
/* @pjs preload="/gshow/pics/mario_jump_right.png" */

PImage mario_left;
PImage mario_right;
void setup() {
  size(32,32);

  mario_left = loadImage("/gshow/pics/mario_jump_left.png");
  mario_right = loadImage("/gshow/pics/mario_jump_right.png");

  frameRate(1.5);
}

bool i = false;
void keyPressed() {
  i = !i;
}

void draw(){
  background(0);
  //background(i ? 0 : 255);

  image((i ? mario_left : mario_right), 0, 0);
}

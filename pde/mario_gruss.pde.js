/* @pjs globalKeyEvents="true"; */
/* @pjs preload="/gshow/pics/mario_gruss_00.png" */
/* @pjs preload="/gshow/pics/mario_gruss_01.png" */


PImage marios[] = new PImage(2);
void setup() {
  size(32,32);

  marios[0] = loadImage("/gshow/pics/mario_gruss_00.png");
  marios[1] = loadImage("/gshow/pics/mario_gruss_01.png");
}

int DELAY_FRAMES = 15;
int on = 0;

void keyPressed() {
  on = DELAY_FRAMES;
}

void draw(){
  background(0);
  //background(i ? 0 : 255);

  int idx = (on-- > 0) ? 1 : 0;
  image(marios[idx], 0, 0);
}

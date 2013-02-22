/* @pjs preload="/gshow/pics/mario_rot_00.png" */
/* @pjs preload="/gshow/pics/mario_rot_01.png" */
/* @pjs preload="/gshow/pics/mario_rot_02.png" */
/* @pjs preload="/gshow/pics/mario_rot_03.png" */


PImage marios[] = new PImage(4);

void setup() {
  size(32,32);

  marios[0] = loadImage("/gshow/pics/mario_rot_00.png");
  marios[1] = loadImage("/gshow/pics/mario_rot_01.png");
  marios[2] = loadImage("/gshow/pics/mario_rot_02.png");
  marios[3] = loadImage("/gshow/pics/mario_rot_03.png");

  frameRate(1.5);
}

bool i = false;
int cMario = 0;
void draw(){
  background(0);
  //background(i ? 0 : 255);
  i = !i;


  image(marios[frame++ % 4], 0, 0);
}

function drawMario(){
}

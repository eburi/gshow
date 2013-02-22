/* @pjs globalKeyEvents="true"; */
/* @pjs preload="/gshow/pics/mario_run_00.png" */
/* @pjs preload="/gshow/pics/mario_run_01.png" */
/* @pjs preload="/gshow/pics/mario_run_02.png" */
/* @pjs preload="/gshow/pics/mario_run_03.png" */
/* @pjs preload="/gshow/pics/mario_run_04.png" */
/* @pjs preload="/gshow/pics/mario_run_05.png" */
/* @pjs preload="/gshow/pics/mario_run_06.png" */
/* @pjs preload="/gshow/pics/mario_run_07.png" */
/* @pjs preload="/gshow/pics/mario_run_08.png" */
/* @pjs preload="/gshow/pics/mario_run_09.png" */
/* @pjs preload="/gshow/pics/mario_run_10.png" */

int imageCount = 11;
PImage[] marios = new PImage(imageCount);

void setup() {
  size(32,32);

  for(int i=0; i < imageCount; i++) {
    var num = i < 10 ? "0" + i : i;
    var filename = "/gshow/pics/mario_run_" + num + ".png";
    println("loading: " + filename);
    marios[i] = loadImage(filename);
  }
  frameRate(6);
}

boolean on = true;
int cMario = 0;

void keyPressed() {
  on = ! on;
}

void draw(){
  background(0);

  if( on ) {
    var idx = (cMario++ % imageCount );
    println("cMario-idx:"+  idx);
    image(marios[idx], 0, 0);
  }
}

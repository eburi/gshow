/* @pjs globalKeyEvents="true"; */

void setup()
{
    size(32,32);
    background(0);
    frameRate(10); // Too fast!!
}

boolean lines = true;
boolean on = true;

void keyPressed() {
    on = !on;
}

void draw(){
  background(0);
  fill(255);

  lines = !lines;
  if(on == true && lines == true) {
    for(int i=0; i<8; i++) {
        rect(0, i*4, 32, 2);
    }
  }
}

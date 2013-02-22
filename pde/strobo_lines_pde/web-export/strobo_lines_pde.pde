/* @pjs globalKeyEvents="true"; */

void setup()
{
    size(32,32);
    background(0);
    frameRate(10); // Too fast!!
}

boolean lines = true;
boolean on = false;

void keyPressed() {
    on = !on;
    println("on:"+on+"lines:"+lines+" "+(lines && on));
}

void draw(){
  background(0);
  fill(255);
  rect(0, 0, 32, 2);
  rect(0, 4, 32, 2);
 
  if(on == true) {  
    println("pieps");
    for(int i=0; i<8; i++) {
        rect(0, i*4, 32, 2);
    }
  }
}



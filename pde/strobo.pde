void setup()
{
    size(32,32);
    background(0);
    frameRate(10); // Too fast!!
}

bool i = false;
void draw(){
  background(i ? 0 : 255);
  i = !i;
}

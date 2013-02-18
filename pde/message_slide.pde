void setup()
{
    size(32,32);
    background(0);
    fill(255);
    PFont fontA = loadFont("courier");
    textFont(fontA, 20);
    frameRate(20);
}

int left = 32;
int top = 25;
String msg = "Hopp YB!!";
int msgWidth = textWidth(msg);

void draw(){
    background(0);
    text(msg,left,top);
    left--;

    msgWidth = textWidth(msg);
    if( left + msgWidth + 32 < 0 ) {
        left = 32;
    }
}

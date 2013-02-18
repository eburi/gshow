void setup()
{
    size(32,32);
    background(0);
    frameRate(2);
}

int i = 0;
int left = 2;
int top = 30;
String msg = "H A L L O !! ";

void draw(){
    background(0);
    text(msg[i++],left,top);
    if( i >= msg.length ) {
        i=0;
    }
}

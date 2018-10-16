let xv = 3.5;
let yv = 0;
let middleYV = 3.8;
let numberOfIterations = 6;

function setup() {
    createCanvas(1000, 1000);
    background(230);
    fill(230);
    stroke(30);
    translate(width/2, height/2);
    sierp(-100*xv, 50*yv, 0, -100*middleYV, 100*xv, 50*yv, numberOfIterations);
    sierp(-100*xv, -50*yv, 0, 100*middleYV, 100*xv, -50*yv, numberOfIterations);
  }

function sierp( x1,  y1,  x2,  y2,  x3,  y3,  n) {
    if ( n > 0) {
        
        triangle(x1,y1,x2,y2,x3,y3);
        let divisor = 2.5;

        let p1 = (x1 + x2)/divisor;
        let k1 = (y1 + y2)/divisor;
        let p2 = (x2 + x3)/divisor;
        let k2 = (y2 + y3)/divisor;
        let p3 = (x1 + x3)/divisor;
        let k3 = (y1 + y3)/divisor;

        sierp(p1, k1, p2, k2, p3, k3, n-1);
        sierp(x1, y1, p1, k1, p3, k3, n-1);
        sierp(p1, k1, x2, y2, p2, k2, n-1);
        sierp(p3, k3, p2, k2, x3, y3, n-1);
    }
    
}

function mouseClicked(){
    save("generative-sierp.png");
    return false;
}

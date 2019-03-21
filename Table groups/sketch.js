/*function setup() {

 createCanvas(500, 500);

}

function draw() {
  // put drawing code here\
table (10,50) // upper left
table (100,50) // upper right
table (10,140) //bottom left
table (100,140) // bottom right


}

function table (x,y){
  fill(218, 227, 242);
  stroke(40, 98, 193);
  strokeWeight(1);
  square(x, y, 55);
}*/


var boxes = [];

function setup() {
    // createCanvas(displayWidth,displayHeight);
    createCanvas(500, 500);

        boxes.push(new Box(100,300)); //bottom left
        boxes.push(new Box(100,100)); // top left
        boxes.push(new Box(300,300)); // bottom right
        boxes.push(new Box(300,100)); // top right



}
// global vars

function draw() {
    background(200, 200, 200); // background
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].show();

    }
}



function mousePressed() {
    for (var i = 0; i < boxes.length; i++) {
        //checking to see if the mouse is over the box and turning it white if it is
        if (boxes[i].boxover == true) {
            boxes[i].locked = true;
            print("mouse is pressed")
        } else {

            boxes[i].locked = false;
            print("mouse isn't pressed")
        }
        boxes[i].xoffset = mouseX - boxes[i].xpos;
        boxes[i].yoffset = mouseY - boxes[i].ypos
        print(boxes[i].locked);
    }
    return false;
}

function mouseDragged() {
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].locked) {
            boxes[i].xpos = mouseX - boxes[i].xoffset;
            boxes[i].ypos = mouseY - boxes[i].yoffset;
        }
    }
}

function mouseReleased() {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].locked = false;
    }
}

function Box(xpos,ypos) {

    this.xpos = xpos; // starting x
    this.ypos = ypos; // starting y

    this.boxsize = 50; // size of square
    this.boxover = false;
    this.locked = false;
    this.xoffset = 0;
    this.yoffset = 0;
    rectMode(RADIUS);


    this.show = function() {

        if (mouseX > this.xpos - this.boxsize && mouseX < this.xpos + this.boxsize &&
            mouseY > this.ypos - this.boxsize && mouseY < this.ypos + this.boxsize) {
            this.boxover = true;
          //  fill(0); // color when dragged

            if (mouseIsPressed && this.boxover == true) {
                stroke(0, 0, 0); // color of border when dragged
                strokeWeight(3); // thickness of border when dragged
            } else {
                noStroke();
            }

        } else {
            this.boxover = false;
            noStroke();
            fill(121, 157, 216); // color of boxes
        }
        rect(this.xpos, this.ypos, this.boxsize, this.boxsize, 7);
        stroke(2);
        strokeWeight(2);
        fill(0);
        var words = [ "apple", "bear", "cat", "dog" ];
        text(words[0],xpos+50,ypos+50);
    };
}


//function name() {
  //fill('black');
/*
  textSize(25);
  text(words[0],100,100);  // Displays one of the four words
  text(words[1],200,150);
  text(words[2],50,150);
  text(words[3],100,200);*/
//}

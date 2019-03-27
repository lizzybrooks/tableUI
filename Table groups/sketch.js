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

let names_ = ['apple', 'pear', 'orange', 'banana', 'iphone', 'android', 'burner', 'Nokia','Fitbit', 'watch', 'rolex', 'clock', 'laptop', 'desktop', 'pc', 'tablet'];
let name_arr = random_sets(shuffle(names_)); // this is where the name array is randomized and set up as a 2D array for later


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
        boxes[i].text(name_arr[i%name_arr.length]); // ok it's later!

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
      //  var words = [ "apple", "bear", "cat", "dog" ];
      //  text(words[0],xpos+50,ypos+50);
    };

    this.text = function (text_arr) {
      push();
      strokeWeight(0);
      text(text_arr[0], this.xpos-90, this.ypos);
      text(text_arr[1], this.xpos+60, this.ypos);
      text(text_arr[2], this.xpos-20, this.ypos-60);
      text(text_arr[3], this.xpos-20, this.ypos+65);
      pop();
    };

}

function shuffle(a) { // this just shuffles an array i got it off of Stack Overflow
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function random_sets(name_arr) { // name_arr is a normal array of strings ['s1', 's2'...]
    var master_arr = [];
    for (i = 0; i < name_arr.length; i+=4) { // this 4 is for the number of tables if you want to rewrite the function (please do)
        var temp = [];
        for (j = i; j < i+4; j++) { // only 4 ppl allowed per table
            temp.push(name_arr[j]);
        }
        master_arr.push(temp)
    } // this is a 2 dimensional for loop (used when you have to navigate or build a 2D array
    // this particular set of for loops is meant to build a 2D array
    return master_arr; // returns the 2D array (a 2D array is and array of arrays [[items],[more, items],...]
}// try writing your own version of this, what wrote is frankly not great (there is a story tho)

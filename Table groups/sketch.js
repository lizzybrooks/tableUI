//let names_ = ['apple', 'pear', 'orange', 'banana', 'iphone', 'android', 'burner', 'Nokia','Fitbit', 'watch', 'rolex', 'clock', 'laptop', 'desktop', 'pc', 'tablet']
let names_ = ['','','','','','','','','','','','','','','',''];
let name_arr = random_sets(shuffle(names_)); // this is where the name array is randomized and set up as a 2D array for later

var boxes = [];
var randomButton;

function setup() {
    // createCanvas(displayWidth,displayHeight);
    createCanvas(windowWidth, windowHeight);

    boxes.push(new Box(windowWidth / 3.1, windowHeight / 4 + 50, 125, 125)); //bottom left
    boxes.push(new Box(windowWidth / 3.1, (windowHeight / 4) * 3, 125, 125)); // top left
    boxes.push(new Box((windowWidth / 3.7) * 2.5, windowHeight / 4 + 50, 125, 125)); // bottom right
    boxes.push(new Box((windowWidth / 3.7) * 2.5, (windowHeight / 4) * 3, 125, 125)); // top right

    randomButton = createButton('randomize');

    randomButton.position(windowWidth - 250, 19);
    randomButton.size(120, 40);
    randomButton.style('color', 'black');
    randomButton.style('border-radius', '10%');
    randomButton.style('font-size', '20px');
    randomButton.style('background-color', '#d8e7ff');
    randomButton.style('cursor', 'pointer');


    var name = createInput();
    name.attribute('placeholder', 'Insert names here (comma-separated)');
    name.input(myInputEvent);
    name.position(windowWidth / 4 - 100, 19); //location of search box
    name.style('font-size', '20px');
    name.style('border-style', 'solid');
    name.style('border-width','1px');
    name.style('border-color', 'blue');
    name.style('border-radius', '4px');
    name.style('padding', '8px');
    name.style('width', '60%');
    // name.style('border', '#ff0000');
    // name.style('background-color', '200,200,200');
    randomButton.mousePressed(function() {
        addNames();
        name_arr = random_sets(shuffle(names_));
        name.value('');
    });
}

function myInputEvent() {
    studentNames = this.value();
}

function addNames(){
    names_= split(studentNames, ',');
    x_dif = (4*boxes.length) - split(studentNames, ',').length;
    for (i = 0; i < x_dif; i++){
        names_.push('');
    }
}


// function addNewSquareBox() {
//     boxes.push(new Box(windowWidth/2, windowHeight/2, 125, 125));
// }
//
// function addNewRectBox() {
//     boxes.push(new Box(windowWidth/2, windowHeight/2, 125, 62.5));
// }
//
// function addNewVertRectBox() {
//     boxes.push(new Box(windowWidth/2, windowHeight/2, 62.5, 125));
// }

function draw() {
    background(247, 248, 249); // background
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].show();
        boxes[i].text(name_arr[i % name_arr.length]); //
    }
    fill(202, 205, 209);
    rect(25, 395, 25, 65);
    fill('black');
    textSize(32);
    strokeWeight(0.1);
    text('door', 55, 400);
}

function mousePressed() {
    for (var i = 0; i < boxes.length; i++) {
        //checking to see if the mouse is over the box and turning it white if it is
        if (boxes[i].boxover) {
            boxes[i].locked = true;
            print('mouse is pressed');
        } else {
            boxes[i].locked = false;
            print('mouse isn\'t pressed');
        }
        boxes[i].xoffset = mouseX - boxes[i].xpos;
        boxes[i].yoffset = mouseY - boxes[i].ypos;
        print(boxes[i].locked);
    }
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

class Box {
    constructor(xpos, ypos, boxsizex, boxsizey) {
        this.xpos = xpos; // starting x
        this.ypos = ypos; // starting y
        this.boxsizex = boxsizex; // size of square
        this.boxsizey = boxsizey;
        this.boxover = false;
        this.locked = false;
        this.xoffset = 0;
        this.yoffset = 0;
        rectMode(RADIUS);
    }

    show() {
        if (mouseX > this.xpos - this.boxsizex && mouseX < this.xpos + this.boxsizex &&
            mouseY > this.ypos - this.boxsizey && mouseY < this.ypos + this.boxsizey) {
            this.boxover = true;
            fill(96, 153, 255); //box color when mouse hovers
            stroke(0, 0, 0); // color of border when dragged
            strokeWeight(3); // thickness of border when dragged
            if (mouseIsPressed && this.boxover == true) {
                fill(96, 153, 255); //box color when mouse preseed
                stroke(0, 0, 0); // color of border when dragged
                strokeWeight(3); // thickness of border when dragged
            } else {
                stroke(0, 0, 0); // color of border when dragged
                strokeWeight(3); // thickness of border when dragged
            }
        } else {
            this.boxover = false;
            stroke(0, 0, 0); // color of border when dragged
            strokeWeight(3); // thickness of border when dragged
            fill(96, 133, 195); // color of boxes when mouse not over box
        }
        rect(this.xpos, this.ypos, this.boxsizex, this.boxsizey, 7);
        stroke(2);
        strokeWeight(3);
        stroke(0, 0, 0);
    }

    text(text_arr) {
        push();
        strokeWeight(0);
        fill(0, 0, 0);
        textSize(20);
        text(text_arr[0], this.xpos - this.boxsizex - this.boxsizex / 1.5, this.ypos);
        text(text_arr[1], this.xpos + this.boxsizex + 5, this.ypos);
        text(text_arr[2], this.xpos - 25, this.ypos - this.boxsizey - 10);
        text(text_arr[3], this.xpos - 25, this.ypos + this.boxsizey + 25);
        if (names_.length > 16) {
            text(text_arr[4], this.xpos - 15, this.ypos);
        }
        pop();
    }
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
    for (i = 0; i < name_arr.length; i += 4) { // this 4 is for the number of tables if you want to rewrite the function (please do)
        var temp = [];
        for (j = i; j < i + 5; j++) { // only 4 ppl allowed per table
            temp.push(name_arr[j]);
        }
        master_arr.push(temp)
    } // this is a 2 dimensional for loop (used when you have to navigate or build a 2D array
    // this particular set of for loops is meant to build a 2D array
    return master_arr; // returns the 2D array (a 2D array is and array of arrays [[items],[more, items],...]
}// try writing your own version of this, what wrote is frankly not great (there is a story tho)

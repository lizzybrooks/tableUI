# tableUI
Title: Table Group Name Randomizer

Description: Table Groups is a program designed for teachers. It allows the teachers to input the names of their students, and assign a random position to each student around the tables placed in the room. Tables can be moved to fit the orientation of each classroom and different sizes and shapes of tables can be added or moved as well. 

Visual:

Contributions: We are open to contributions if you want to made edits to this code. If you want to pursue that idea, you may fork our repository and propose your new code to us. If we approve of your edits, then we will merge your code into our master branch. 

Snipet of code:

function setup() {
    // createCanvas(displayWidth,displayHeight);
    createCanvas(windowWidth, windowHeight);

        boxes.push(new Box(windowWidth/3.2, windowHeight/4+50, 125, 125)); //bottom left
        boxes.push(new Box(windowWidth/3.2, (windowHeight/4)*3+50, 125, 125)); // top left
        boxes.push(new Box((windowWidth/3.7)*2.5, windowHeight/4+50, 125, 125)); // bottom right
        boxes.push(new Box((windowWidth/3.7)*2.5, (windowHeight/4)*3+50, 125, 125)); // top right

        randomButton = createButton('randomize');

        randomButton.position(windowWidth/2+150, 19);
        randomButton.size(120,40);
        randomButton.style("color", "black");
        randomButton.style("border-radius", "10%");
        randomButton.style("font-size", "20px");
        randomButton.style("background-color", "#d8e7ff");
        randomButton.style("cursor","pointer");
        // randomButton.mousePressed(addNames);
        randomButton.mousePressed(function(){
          addNames();
          name_arr = random_sets(shuffle(names_))
        });
